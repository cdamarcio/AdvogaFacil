# Diagrama de Sequência - Sincronização de Processos

O fluxo abaixo descreve como o AdvogaFácil autentica e extrai dados dos tribunais sem intervenção manual constante.

```mermaid
sequenceDiagram
    autonumber
    participant Adv as Advogado (Frontend)
    participant API as Backend (FastAPI)
    participant Worker as Scraper Engine (Playwright)
    participant PJe as Portal Tribunal (TJPA/TRT8)
    participant DB as PostgreSQL

    Adv->>API: Solicita atualização de processos
    API->>DB: Busca credenciais/tokens criptografados
    DB-->>API: Retorna credenciais
    API->>Worker: Inicia tarefa de Background (Celery)
    
    Note over Worker, PJe: Início da Autenticação
    Worker->>PJe: Handshake com Certificado Digital/Login
    PJe-->>Worker: Sessão Autorizada (Cookies/Tokens)
    
    Worker->>PJe: Consulta Numeração Única CNJ
    PJe-->>Worker: Retorna HTML/JSON da Movimentação
    
    Worker->>Worker: Sanitização de Dados (Regex/BeautifulSoup)
    Worker->>DB: Atualiza status do Processo e cria Alertas
    Worker-->>API: Task concluída
    
    API-->>Adv: Push Notification / Dashboard Atualizado