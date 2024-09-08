import { IsEnum, IsOptional } from "class-validator";
import { OrderStatus } from "../enum/order_status.enum";

export class StatusDto {

    @IsEnum(OrderStatus, {
        message: 'Invalid order status',
    })
    @IsOptional()
    status: OrderStatus = OrderStatus.PENDING;

}
