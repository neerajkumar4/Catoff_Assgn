// src/wallet-address/wallet-address.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WalletAddress } from './wallet-address.entity';
import { CreateWalletAddressDto } from './dto/create-wallet-address.dto';
import { UpdateWalletAddressDto } from './dto/update-wallet-address.dto';

@Injectable()
export class WalletAddressService {
  constructor(
    @InjectRepository(WalletAddress)
    private readonly walletAddressRepository: Repository<WalletAddress>,
  ) {}

  findAll(): Promise<WalletAddress[]> {
    return this.walletAddressRepository.find();
  }

  async findOne(id: number): Promise<WalletAddress> {
    const walletAddress = await this.walletAddressRepository.findOneBy({ id });
    if (!walletAddress) {
      throw new NotFoundException(`WalletAddress with ID ${id} not found`);
    }
    return walletAddress;
  }

  create(createWalletAddressDto: CreateWalletAddressDto): Promise<WalletAddress> {
    const walletAddress = this.walletAddressRepository.create(createWalletAddressDto);
    return this.walletAddressRepository.save(walletAddress);
  }

  async update(id: number, updateWalletAddressDto: UpdateWalletAddressDto): Promise<WalletAddress> {
    await this.walletAddressRepository.update(id, updateWalletAddressDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const walletAddress = await this.findOne(id);
    await this.walletAddressRepository.remove(walletAddress);
  }
}
