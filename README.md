# AdvogaFácil - Integração Jurídica Pará

O **AdvogaFácil** é uma plataforma de automação e gestão processual desenvolvida para unificar o fluxo de trabalho de advogados que atuam nos tribunais do Pará (**TJPA, JFPA, TRE-PA e TRT8**).

## Objetivo
Eliminar a necessidade de abrir múltiplos sistemas PJe/Projudi, centralizando consultas, prazos e peticionamentos em uma única interface inteligente.

## Tecnologias Utilizadas
- **Backend:** Python (FastAPI / Django)
- **Automação:** Playwright & Selenium (Scraping de tribunais)
- **Banco de Dados:** PostgreSQL & Redis (Cache de sessões)
- **Segurança:** Criptografia AES-256 e Integração com PJeOffice

AdvogaFacil/
├── .env                  # Suas credenciais (não enviar ao GitHub)
├── .gitignore            # Para ignorar venv/ e .env
├── README.md             # Arquivo principal
├── CHANGELOG.md          # Histórico de versões
├── CONTRIBUTING.md       # Guia para colaboradores
├── LICENSE.md            # Licença MIT
│
├── docs/                 # Pasta que criamos os conteúdos
│   ├── REQUISITOS.md
│   ├── INSTALL.md
│   ├── DIAGRAMAS.md
│   ├── ARQUITETURA.md
│   ├── DIAGRAMA_CLASSES.md
│   ├── DIAGRAMA_SEQUENCIA.md
│   ├── DIAGRAMA_ESTADOS.md
│   ├── DIAGRAMA_COMPONENTES.md
│   └── DB_SCHEMA.md
│
└── src/                  # Onde ficará seu código Python (FastAPI/Scrapers)
    └── ...

## Contato
Desenvolvido por: **Márcio Rodrigues de Oliveira** cda.marcio@gmail.com