import { Json } from "sequelize/types/lib/utils"

export type Quote ={
  quote_id?: number,
  uuid: string
  status?: boolean,
  mobile?: string,
  email?: string,
  quote_data: Json|any,
  created_at: Date
}