# AdvogaFácil - Sistema de Gestão Jurídica
Este projeto é um sistema de gestão para escritórios de advocacia focado em organização processual, controle de prazos e gestão de clientes. 
O sistema foi projetado para centralizar informações sensíveis com segurança e oferecer automação de consultas processuais.

## Funcionalidades

### 1. Gestão de Clientes (CRM)

* Cadastro completo de pessoas físicas e jurídicas.
* Histórico de interações e documentos anexados.
* Vinculação direta com processos ativos.

### 2. Controle Processual e Prazos

* Monitoramento de processos por número CNJ.
* **Dashboard de Prazos:** Visualização prioritária de prazos fatais e audiências.
* Sistema de alertas via e-mail para movimentações importantes.

### 3. Gestão Documental

* Armazenamento em nuvem de petições, procurações e provas.
* Geração de documentos básicos a partir de templates pré-definidos.

### 4. Financeiro

* Controle de honorários (fixos e êxito).
* Lançamento de custas processuais reembolsáveis.

---

## Tecnologias Utilizadas

* **Linguagem:** Python 3.10+
* **Framework Web:** [Django](https://www.djangoproject.com/)
* **Banco de Dados:** PostgreSQL (Produção) / SQLite (Desenvolvimento)
* **Estilização:** Bootstrap 5 ou Tailwind CSS
* **Automação:** Selenium / Beautiful Soup (para raspagem de dados dos tribunais)

---

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

* [Python](https://www.python.org/)
* [Git](https://git-scm.com/)
* Virtualenv (recomendado)

---

## Instalação e Configuração

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/AdvogaSys.git
cd advogacy-manager

```

2. **Crie e ative o ambiente virtual:**
```bash
python -m venv venv
# Windows:
.\venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

```

3. **Instale as dependências:**
```bash
pip install -r requirements.txt

```

4. **Configure as migrações do banco de dados:**
```bash
python manage.py migrate

```

5. **Crie um superusuário (Administrador):**
```bash
python manage.py createsuperuser

```

6. **Inicie o servidor:**
```bash
python manage.py runserver

```

## Arquitetura do Banco de Dados (Principais Modelos)

O sistema utiliza uma estrutura relacional para garantir a integridade dos dados:

* **Clients:** Dados cadastrais e documentos.
* **Lawsuits (Processos):** Número CNJ, tribunal, vara e status.
* **Deadlines (Prazos):** Datas críticas vinculadas a um processo e um responsável.

---

## Segurança e LGPD

O projeto segue as diretrizes da Lei Geral de Proteção de Dados:

* Criptografia de senhas (padrão Django).
* Logs de auditoria para acesso a documentos sensíveis.
* Níveis de permissão (Administrador, Advogado, Secretário).

---

## Licença

Este software é de propriedade da KM PROJETOS. O uso ou reprodução sem autorização do desenvolvedor Márcio Rodrigues de Oliveira é estritamente proibida.
