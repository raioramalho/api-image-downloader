import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class DownloadImagemDto {
  @ApiProperty({
    readOnly: true,
    required: true,
  })
  @IsNotEmpty()
  @IsUrl()
  @IsString()
  URL: string;
}
