import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import App from './App';

afterEach(() => {
    cleanup();
})

describe('Pruebas del enrutador base (App)', () => {

    it('Prueba 1: Renderiza el enlace Ir al Listado', () => {
        render(<App />);
        expect(screen.getByText('Ir al Listado')).toBeDefined();
    });

    it('Prueba 2: Renderiza el enlace del Detalle', () => {
        render(<App />);
        expect(screen.getByText('Ver Detalle de prueba')).toBeDefined();
    });

    it('Prueba 3: Renderiza la pantalla de Listado por defecto', () => {
        render(<App />);
        expect(screen.getByText('Gestor de tareas del curso')).toBeDefined();
    });

});