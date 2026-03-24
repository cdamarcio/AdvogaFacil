# Arquitetura e Diagramas UML - AdvogaFácil

Este documento detalha a estrutura técnica, fluxos de dados e interações do sistema com os tribunais (TJPA, TRT8, JFPA e TRE-PA).

---

## 1. Diagrama de Casos de Uso (Use Case)
Define as fronteiras do sistema e as interações do Advogado com os serviços externos.

```mermaid
usecaseDiagram
    actor "Advogado (Usuário)" as Adv
    actor "Sistema PJe (TRT8/JFPA)" as PJe
    actor "Sistema Projudi (TJPA)" as Projudi
    actor "Serviço de Assinatura" as Cert
    
    package AdvogaFacil_App {
        usecase "Autenticar via Certificado/Gov.br" as UC1
        usecase "Consultar Painel Unificado" as UC2
        usecase "Peticionar em Lote" as UC3
        usecase "Gerenciar Prazos (Agenda)" as UC4
        usecase "Baixar Autos Completos" as UC5
    }

    Adv --> UC1
    Adv --> UC2
    Adv --> UC3
    Adv --> UC4
    Adv --> UC5

    UC1 -- Cert
    UC2 -- PJe
    UC2 -- Projudi
    UC3 -- PJe
    UC5 -- Projudi