	import Attendance from "../../components/global/Attendance.jsx"
import FooterProfessionals from "../../components/global/FooterProfessionals.jsx"
import HeaderPsych from "../../components/psychology/HeaderPsych.jsx"
import Modal from "../../components/global/Modal.jsx"
import SearchInput from "../../components/global/SearchInput.jsx"
import StateUser from "../../components/global/StateUser.jsx"
import TablePagination from "../../components/global/TablePagination.jsx"
import Tables from "../../components/global/Tables.jsx"

import { Card, Flex } from "antd"
import {ExclamationCircleOutlined} from "@ant-design/icons"
import dayjs from "dayjs"
import 'dayjs/locale/es'

import styles from "../../styles/psychology/agendaPsych.module.css"
import cssButtonsModal from "../../styles/admin/managementUsers.module.css"

import { useState } from "react"

export default function AgendaPsych(){
	dayjs.locale("es")

	const [enableConfirm, setEnableConfirm] = useState(false)
	const [whoClicked, setWhoClicked] = useState("")
  
	let date = dayjs()

	const appointmentPendingColums = ["Hora","Paciente", "Télefono", "Asistencia"]
	
	const appointmentDoneColums = ["Horario cita","Paciente", "Télefono", "Asistencia"]
	
	const handlerAttendanceClick = (event) => {
		setEnableConfirm(true)
		setWhoClicked(event.currentTarget.name)
	}
	

	const rowsAppoinmentPending = [
		[
			"2 PM","Carolina Perez",123456789, <Flex key={1} justify="space-around" align="center">
				<button 
				name="btnAttendance" 
				onClick={handlerAttendanceClick} 
				className={styles.assistance}>
					<Attendance non={false}/>
				</button>
				<button 
				name="btnNonAttendance" 
				onClick={handlerAttendanceClick} 
				className={styles.assistance}>
					<Attendance/>
				</button>
				</Flex>],
		[
			"3 PM","José Casanova",123456789, <Flex key={2} justify="space-around" align="center">
				<button name="btnAttendance" onClick={handlerAttendanceClick} className={styles.assistance}><Attendance non={false}/></button>
				<button name="btnNonAttendance" onClick={handlerAttendanceClick} className={styles.assistance}><Attendance/></button>
				</Flex>]
	]

	const rowsAppointmentDone = [
		[dayjs("2024-09-30T13:00:00").format("DD/MM/YYYY h:mm A"), "Mario Sánchez",123456789,<StateUser key={1} active={false}/>]
	]
		return(	
		<>
      <HeaderPsych/>
			<div className={styles.contentTitle}>
				<h1 className="text-red">Agenda</h1>
				<p>Aquí se visualizan las citas pendientes para ser atendidas</p>
			</div>
			<Flex
			align="center" 
			justify="center">			
			<Card
			className={styles.card}
			bordered
			>
			<Modal open={enableConfirm}>
				<Flex vertical
				align="center"
				justify="center">
					<div>
						<ExclamationCircleOutlined />    <h3 style={{display:"inline"}}>Confirmar</h3>
					</div>
					<p>{`¿Desea confirmar la ${whoClicked === "btnAttendance" ? "asistencia?" : whoClicked ? "inasistencia" : ""}`}</p>
				</Flex>
			<Flex
        align='center'
        gap='small'
        justify='space-around'>
          <button className={cssButtonsModal.buttonCancel} onClick={() => setEnableConfirm(false)} >Cancelar</button>
          <button className={cssButtonsModal.buttonSave}>Guardar</button>
        </Flex>
			</Modal>
				<Flex 
				vertical
				align="center"
				justify="center"
				>
					<p className={`${styles.pseudoTableHeader} text-left`}>
						{`${date.format("dddd D [de] MMMM [del] YYYY").split(' ')
  					.map(palabra => (palabra !== 'de' && palabra !== 'del') ? palabra.charAt(0).toUpperCase() + palabra.slice(1) 
    				: palabra).join(' ')}`}
					</p>
					<Tables
					enableClassname
					classNameContainer={styles.table}
					columns={appointmentPendingColums}
					rows={rowsAppoinmentPending}/>
					<SearchInput
					className={styles.searchInput}
					placeholder="Fecha de consulta"
					/>
				</Flex>
				<Flex vertical>
					<p className="text-left">Tabla historial de citas realizadas</p>
					<TablePagination
					columns={appointmentDoneColums}
					rows={rowsAppointmentDone}
					currentPage={1}
					itemsPerPage={1}
					/>
				</Flex>
			</Card>
			</Flex>
			<FooterProfessionals/>
		</>
    );
}