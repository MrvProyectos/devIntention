import { IsEnum, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

// Valida Estructura JSON
const drefundType: Array<string> = JSON.parse(process.env.EJREFUNDTYPE);
const dcategory: Array<string> = JSON.parse(process.env.EJCATEGORY);
const drefundReason: Array<string> = JSON.parse(process.env.EJREFUNREASON);
const dcurrency: Array<string> = JSON.parse(process.env.EJCURRENCY);

export class BodyDTO {

  @IsEnum(['NCR', 'NCA', 'NCB'], {
    message: 'Document Type is not valid [NCR, NCA, NCB]'
  })
  @IsNotEmpty()
  documentType: string;
  //
  @IsEnum(dcategory, {
    message: `Invalid NCR category. [${dcategory.toString()}]`
  })
  @IsNotEmpty()
  ncrCategory: string;
  //
  @IsEnum(drefundType, {
    message: `Indefinite refundtype. [${drefundType.toString()}]`
  })
  @IsNotEmpty()
  refundType: string;
  //
  @IsString()
  @IsNotEmpty()
  idNcr: string;
  //
  @IsString()
  @IsNotEmpty()
  @MinLength(1, {
    message: 'originRequest: must be longer than or equal to 1 characters'
  })
  @MaxLength(25, {
    message: 'originRequest: must be shorter than or equal to 25 characters'
  })
  originRequest: string;
  //
  @IsString()
  @IsNotEmpty()
  @MaxLength(25, {
    message: 'originUser: must be shorter than or equal to 50 characters'
  })
  originUser: string;
  //
  @IsString()
  @IsNotEmpty()
  @MinLength(1, {
    message: 'branchOfficeCode: must be longer than or equal to 1 characters'
  })
  @MaxLength(25, {
    message: 'branchOfficeCode: must be shorter than or equal to 10 characters'
  })
  branchOfficeCode: string;
  //
  @IsEnum(drefundReason, {
    message: `Reason for invalid ncr. [${drefundReason.toString()}]`
  })
  @IsNotEmpty()
  refundReason: string;
  //
  @IsString()
  refundObs: string;
  //
  @IsString()
  @IsNotEmpty()
  dateOfNotification: string;
  //
  @IsNumber()
  totalValue: number;
  //
  @IsEnum(dcurrency, {
    message: `Invalid Currency Type. [${dcurrency.toString()}]`
  })
  @IsString()
  currency: string;
  //
}
