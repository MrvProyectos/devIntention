import { IsNotEmpty, IsEnum, IsString, isNotEmpty } from 'class-validator';
const countries: Array<string> = JSON.parse(process.env.COUNTRIES);
const vcommerce: Array<string> = JSON.parse(process.env.ENVCOMMERCE);
const vchref:Array<string> = JSON.parse(process.env.ENVCHREF);
const vrhsref:Array<string> = JSON.parse(process.env.ENVRHSREF);
const vcmref:Array<string> = JSON.parse(process.env.ENVCMREF);
const vtxref:Array<string> = JSON.parse(process.env.ENVTXREF);

export class HeadersDTO {
  @IsEnum(countries, {
    message: `Country is not valid. [${countries.toString()}]`
  })
  @IsNotEmpty()
  'x-country': string;

  @IsEnum(vcommerce, {
    message: `Commerce is not valid. [${vcommerce.toString()}]`
  })
  @IsNotEmpty()
  'x-commerce': string;

  @IsEnum(vchref, {
    message: `Invalid consumer channel. [${vchref.toString()}]`
  })
  @IsNotEmpty()
  'x-chref': string;

  @IsEnum(vrhsref, {
    message: `Invalid remote host reference. [${vrhsref.toString()}]`
  })
  @IsNotEmpty()
  'x-rhsref': string;

  @IsEnum(vcmref, {
    message: `Invalid consumer reference or identification. [${vcmref.toString()}]`
  })
  @IsNotEmpty()
  'x-cmref': string;

  @IsEnum(vtxref, {
    message: `Invalid transaction reference. [${vtxref.toString()}]`
  })
  @IsNotEmpty()
  'x-txref': string;

}