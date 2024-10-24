import dayjs from "dayjs"
const LIMITS_NAMES = 50
// PENSADOS PARA GESTIÓN DE USUARIOS
//This is by users
export const validName = name => name.length <= LIMITS_NAMES ? true : "Los nombres son muy largos"

export const validLastname = lastname => lastname.length <= LIMITS_NAMES ? true : "Los apellidos son muy largos"

const forCode = code => {
  const c = Number.parseInt(code)
  const limitTop = (dayjs().year() * 10000) + 99999 // ej: año 2024 -> 202499999
  return (c >= 195000000) && (c <= limitTop) ? true : 
  `El código no es válido, debe tener 9
  dígitos. Ej: ${limitTop}`
}

const forNuip = nuip => {
  return (nuip.length >= 8) && (nuip.length <= 10) ? true : 
  `La cédula ${nuip} no es una cédula válida
  esta debe contener entre 8  y 10 digitos`
}

const forPlan = plan => /^\d{4}$/.test(plan) ? true : "Debe ingresar sólo 4 digitos"

const forArea = area => /^[a-zA-Z]$/.test(area) ? true : "El área debe por ejemplo ser adminstrativa, psicología, etc"

export const validCode = (code, isCode) => {
  //Si es estudiante o beneficiario
  if(isCode){
    return forCode(code)
  }
  //Si es funcionario
  return forNuip(code)
}

export const validPlan = (plan, isPlan) => {
  if(isPlan){
    return forPlan(plan)
  }
  //Área dependiente es un string
  return forArea(plan)
}

export const validEmail = (email, funcionary) => {
  if(funcionary){
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ? true : "Dirección de correo inválida"
  } 
  return /^[a-zA-Z]+\.[a-zA-Z]+@correounivalle.edu.co$/.test(email) ? true : "La dirección de correo electrónico no corresponde a ningún estudiante"
}

export const validRol = rol => rol.length !== 0 ? true : "Debe elegir un rol"

export const validGrant = grant => (grant === "Beneficiario almuerzo") 
|| (grant === "Beneficiario refrigerio") ? true : "Debe elegir un tipo de beca"
/********************************************************************************************************/

//Pensado para Registro de actividades enfermería
export const validFullName = name => name.length <= (LIMITS_NAMES * 2) ? true : "El nombre es demasiado largo"

export const validDate = date => {
  if( !(date.isValid()) ) return "El dato ingresado no es una fecha válida"

  const FORMAT = "YYYY-MM-DD"
  const now = dayjs().startOf("day")
  date = date.startOf("day")

  return date >= now ? true 
          : `La fecha ${date.format(FORMAT)} es anterior a la fecha de hoy ${now.format(FORMAT)}`  
}

export const validPhone = phone => {
  if(isNaN(phone)){
    return "Ingrese un número de celular válido"
  }

  const exampleNumber = 3130000000 + Math.round(Math.random() * 10000000)
  return phone.length === 10 ? true : `El número de celular debe contener 10 digitos Ej: ${exampleNumber}`
}

export const validSemester = semester => {
  if(isNaN(semester)){
    return "El dato ingresado no es un número"
  }
  
  return parseInt(semester) <= 11 ? true 
  :"Una carrera tecnológica dura de 6 a 7 semestres y una carrera profesional de 10 a 11 semestres" 
}

export const validCodeOrNuip = value => {
  const isCode = forCode(value)
  const isNuip = forNuip(value)

  if((typeof isCode === "boolean") && (typeof isNuip === "boolean")){
    return true
  }

  if((typeof isCode === "string") && (typeof isNuip === "string")){
    return `${isCode} \n ${isNuip}`
  }

  return (typeof isCode === "string") ? isCode : isNuip
}

export const validPlanOrArea = value => {
  const isPlan = forPlan(value)
  const isArea = forArea(value)

  if((typeof isPlan === "boolean") && (typeof isArea === "boolean")){
    return true
  }

  if((typeof isPlan === "string") && (typeof isArea === "string")){
    return `${isPlan} \n ${isArea}`
  }

  return (typeof isPlan === "string") ? isPlan : isArea
}

export const validListEmpty = (listObj, optionSelected, message) => {
  const include = listObj.find( obj => obj.value === optionSelected )
  
  return include === undefined ? message : true
}