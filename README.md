# AdvogaFácil - Automação Jurídica (Pará)

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![PostgreSQL](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

O **AdvogaFácil** é uma plataforma de alto desempenho projetada para centralizar o fluxo de trabalho jurídico. O foco principal é a integração inteligente com os sistemas PJe e Projudi dos tribunais do Pará, eliminando a fragmentação de dados e a perda de prazos.

---

## **Escopo do Projeto**

O sistema atua como um hub central para:
* **TJPA** (Tribunal de Justiça do Pará - Projudi)
* **TRT8** (Tribunal Regional do Trabalho da 8ª Região)
* **JFPA** (Justiça Federal - Seção Judiciária do Pará)
* **TRE-PA** (Tribunal Regional Eleitoral do Pará)

---

## **Estrutura do Repositório**

```text
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
    └── main.py           # Ponto de entrada da API
```

---

## **Funcionalidades Principais**

* [x] **Dashboard Unificado:** Visualize todos os processos em uma única tela.
* [x] **Sincronização Automática:** Robôs de alta performance que monitoram movimentações 24/7.
* [x] **Gestão de Prazos:** Cálculo automatizado com base no calendário judiciário paraense.
* [x] **Peticionamento em Lote:** Envio de documentos via integração com assinadores (PJeOffice/Shodo).

---

## **Stack Tecnológica**

* **Linguagem:** Python 3.10+
* **Framework Web:** FastAPI
* **Automação:** Playwright (Engines de Scraping)
* **Banco de Dados:** PostgreSQL com suporte a JSONB
* **Tarefas Assíncronas:** Celery + Redis

---

## **Desenvolvedor**

**Márcio Rodrigues de Oliveira**

Desenvolvedor Fullstack

[cda.marcio@gmail.com](mailto:cda.marcio@gmail.com)

---

## **Licença MIT**

Copyright (c) 2026 **RAZGO**

A permissão é concedida, gratuitamente, a qualquer pessoa que obtenha uma cópia deste software e dos arquivos de documentação associados, para lidar no Software sem restrições, incluindo, sem limitação, os direitos de usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender cópias do Software.
```