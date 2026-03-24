# Diagrama de Estados - Ciclo de Vida da Petição

Representa os estados de um documento desde o upload até o protocolo final no sistema do tribunal.

```mermaid
stateDiagram-v2
    [*] --> Rascunho: Upload do PDF
    Rascunho --> Validando: Comando "Enviar"
    
    state Validando {
        [*] --> VerificandoTamanho
        VerificandoTamanho --> VerificandoAssinatura
    }
    
    Validando --> Erro: PDF Inválido / Sem Assinatura
    Erro --> Rascunho: Corrigir Arquivo
    
    Validando --> Transmitindo: Validado com Sucesso
    
    state Transmitindo {
        [*] --> ConectandoTribunal
        ConectandoTribunal --> EnviandoDados
    }
    
    Transmitindo --> FalhaConexao: Timeout / Portal Offline
    FalhaConexao --> Transmitindo: Retry Automático (3x)
    
    Transmitindo --> Protocolado: Recibo Gerado pelo Tribunal
    Protocolado --> [*]: Notificar Advogado