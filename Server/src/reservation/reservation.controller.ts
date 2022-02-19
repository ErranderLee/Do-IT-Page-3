import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationService } from './reservation.service';

@Controller('reservation')
@ApiTags('Reservation API')
export class ReservationController {
    constructor(private readonly reservationService: ReservationService) {}

    @Post()
    @ApiOperation({
        summary: '과방 신청 API',
        description: 'true false 반환'
    })
    @ApiBody({ type: CreateReservationDto })
    @ApiOkResponse({ description: '과방 신청 성공', type: BaseSuccessResponse })
    create(@Body() createReservationDto: CreateReservationDto) {
        return this.reservationService.createReservation(createReservationDto);
    }

    @Get()
    @ApiOperation({
        summary: '전체 과방 신청 정보 불러오기 API',
        description: '성공 시 전체 정보 혹은 빈 배열 반환, 실패 시 false 반환'
    })
    @ApiOkResponse({ description: '전체 스터디 불러오기 성공' })
    findAll() {
        return this.reservationService.findAll();
    }

    @Get(':idx')
    @ApiOperation({
        summary: '특정 과방 신청 정보 불러오기 API',
        description: '성공 시 과방 신청 정보 반환, 실패 시 false 반환'
    })
    @ApiOkResponse({ description: '특정 과방 신청 정보 불러오기 성공' })
    findOne(@Param('idx') reservationIdx: number) {
        return this.reservationService.findOne(reservationIdx);
    }

    // @Patch(':idx')
    // @ApiOperation({
    //     summary: '과방 신청 정보 수정 API',
    //     description: 'true false 반환'
    // })
    // @ApiBody({ type: UpdateReservationDto })
    // @ApiOkResponse({ description: '과방 신청 정보 수정 성공', type: BaseSuccessResponse })
    // update(@Param('idx') reservationIdx: number, @Body() updateReservationDto: UpdateReservationDto) {
    //     return 
    // }

    @Delete(':idx')
    @ApiOperation({
        summary: '과방 신청 정보 삭제 API',
        description: 'true false 반환'
    })
    @ApiOkResponse({ description: '과방 신청 정보 삭제 성공' })
    remove(@Param('idx') reservationIdx: number) {
        return this.reservationService.remove(reservationIdx);
    }
}
