# Guia de Instalação e Configuração (Windows)

Siga este passo a passo para configurar o ambiente de desenvolvimento do **AdvogaFácil**.

## 1. Preparação do Python no Windows
Se você recebeu o erro *"Python não foi encontrado"* ou *"Microsoft Store"*:

1.  **Desativar Aliases do Windows:**
    - Vá em `Configurações > Aplicativos > Configurações avançadas do aplicativo > Aliases de execução do aplicativo`.
    - Desative o **python.exe** e **python3.exe**.
2.  **Verificar Lançador:**
    - Tente usar `py` em vez de `python`.

## 2. Criação do Ambiente Virtual
Dentro da pasta `AdvogaFacil` no PowerShell:

```powershell
# Cria o ambiente virtual
py -m venv venv

# Ativa o ambiente (Se houver erro de permissão, veja o passo 3)
.\venv\Scripts\Activate.ps1