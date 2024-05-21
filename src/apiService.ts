const API_URL = '/clientes';

export interface Cliente {
    id?: number;
    nomeDeUsuario: string;
    email: string;
    senha: string;
    role: string;
    nome: string;
    sobrenome: string;
    telefoneComercial: string;
    empresa: string;
    cnpj: string;
    pais: string;
    idioma: string;
}

export async function fetchClientes(): Promise<Cliente[]> {
    const response = await fetch(API_URL);
    return await response.json();
}

export async function fetchClienteById(id: number): Promise<Cliente> {
    const response = await fetch(`${API_URL}/${id}`);
    return await response.json();
}

export async function createCliente(cliente: Cliente): Promise<string> {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cliente),
    });
    return await response.text();
}

export async function updateCliente(cliente: Cliente): Promise<string> {
    const response = await fetch(API_URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cliente),
    });
    return await response.text();
}

export async function deleteCliente(id: number): Promise<string> {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    return await response.text();
}
