# Diagrama de Componentes - Arquitetura do Sistema

O AdvogaFácil utiliza uma arquitetura baseada em serviços para garantir que a lentidão de um tribunal (ex: TJPA) não afete a consulta em outro (ex: TRT8).

```mermaid
graph TD
    subgraph Client_Side [Lado do Cliente]
        UI[Web Dashboard - React]
        Sign[PJeOffice / Shodo Integration]
    end

    subgraph Server_Side [Servidor AdvogaFácil]
        API[API Gateway - FastAPI]
        Auth[Módulo de Criptografia/Auth]
        TaskQ[Fila de Tarefas - Redis/Celery]
        
        subgraph Scrapers [Motores de Integração]
            T1[TJPA Projudi Driver]
            T2[TRT8 PJe Driver]
            T3[JFPA/TRE Federal Driver]
        end
    end

    subgraph Data_Layer [Camada de Dados]
        DB[(PostgreSQL - Dados Jurídicos)]
        Vault[(Secret Store - Credenciais)]
    end

    subgraph External [Sistemas Externos]
        TJ[Portal TJPA]
        TRT[Portal TRT8]
        CNJ[DataJud API]
    end

    UI --> API
    Sign <--> API
    API --> Auth
    API --> TaskQ
    TaskQ --> T1 & T2 & T3
    T1 --> TJ
    T2 --> TRT
    T3 --> CNJ
    T1 & T2 & T3 --> DB
    Auth --> Vault