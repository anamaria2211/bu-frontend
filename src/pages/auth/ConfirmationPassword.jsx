import React from "react";
import { Fragment } from "react";
import { Card, Input, Button, Space } from "antd";
import Header from '../../components/auth/Header'


export default function ConfirmationPassword() {
    return (
        <Fragment>
            <Header />
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f0f2f5',
            }}>
                <Card
                    style={{
                        width: 400,
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        borderRadius: '8px',
                    }}
                    bodyStyle={{ padding: '24px' }}
                >
                    <h2 style={{
                        textAlign: 'center',
                        color: '#C20E1A',
                        marginBottom: '24px',
                        fontSize: '20px',
                        fontWeight: 'normal',
                    }}>
                        Restaurar contraseña
                    </h2>
                    <div style={{ marginBottom: '16px' }}>
                        <label>Nueva contraseña:</label>
                        <Input.Password
                            placeholder="Nueva contraseña"
                            size="large"
                            style={{ marginTop: '8px' }}
                        />
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <label>Confirmar contraseña:</label>
                        <Input.Password
                            placeholder="Nueva contraseña"
                            size="large"
                            style={{ marginTop: '8px' }}
                        />
                    </div>
                    <Space style={{ width: '100%', justifyContent: 'center' }}>
                        <Button type="primary" size="large" style={{ backgroundColor: '#C20E1A', borderColor: '#C20E1A' }}>
                            Aceptar
                        </Button>
                        <Button size="large" href="reestablecerContrasena" >
                            Cancelar
                        </Button>
                    </Space>
                </Card>
            </div>
        </Fragment>
    )
}