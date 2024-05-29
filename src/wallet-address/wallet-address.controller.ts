// src/wallet-address/wallet-address.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { CreateWalletAddressDto } from './dto/create-wallet-address.dto';
import { UpdateWalletAddressDto } from './dto/update-wallet-address.dto';

@Controller('wallet-address')
export class WalletAddressController {
  constructor(private readonly walletAddressService: WalletAddressService) {}

  @Post()
  create(@Body() createWalletAddressDto: CreateWalletAddressDto) {
    return this.walletAddressService.create(createWalletAddressDto);
  }

  @Get()
  findAll() {
    return this.walletAddressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.walletAddressService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateWalletAddressDto: UpdateWalletAddressDto,
  ) {
    return this.walletAddressService.update(id, updateWalletAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.walletAddressService.remove(id);
  }
}
