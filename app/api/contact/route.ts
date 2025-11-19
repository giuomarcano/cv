import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, email, telefono, servicio, mensaje } = body

    // Validate required fields
    if (!nombre || !email || !telefono || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos requeridos deben ser completados' },
        { status: 400 }
      )
    }

    // Configurar el transporter de Nodemailer con Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Tu correo de Gmail
        pass: process.env.GMAIL_APP_PASSWORD, // Tu contraseña de aplicación (no la normal)
      },
    })

    // Contenido del correo
    const mailOptions = {
      from: process.env.GMAIL_USER, // Remitente (tu correo)
      to: 'cvserviciosgenerales.pe@gmail.com', // Destinatario (tú mismo)
      replyTo: email, // Para que al responder le llegue al cliente
      subject: `Nueva solicitud de contacto: ${nombre} - ${servicio || 'General'}`,
      text: `
        Nueva solicitud de contacto desde el sitio web:
        
        Nombre: ${nombre}
        Email: ${email}
        Teléfono: ${telefono}
        Servicio de interés: ${servicio || 'No especificado'}
        
        Mensaje:
        ${mensaje}
      `,
      html: `
        <h3>Nueva solicitud de contacto desde el sitio web</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Servicio de interés:</strong> ${servicio || 'No especificado'}</p>
        <br/>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje.replace(/\n/g, '<br>')}</p>
      `,
    }

    // Enviar el correo
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Formulario enviado exitosamente' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Error al procesar el formulario' },
      { status: 500 }
    )
  }
}
