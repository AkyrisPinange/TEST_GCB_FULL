# TEST_GCB_FULL

### Tecnologias Ultilizadas 
- TypesScrip
- React
- Postgress/SQL
### FreamWorks/Bibliotacas 
- Bootstrap
- TypeORM

### Requisitos para o uso
1. Docker Instalado :white_check_mark:
2. NodeJs instalatalo :white_check_mark:

## Modo de uso
1. No diretório Raiz navegue para: ```cd backend```
  - Digite o comando ```docker-compse up```
    - Quando o processo terminar rode as ```migrations```
    com o comando: ```yarn run typeorm migration:run```
    - agora inicie o server : ```yarn run dev```
2. Agora navegue até o diretório: ```template-gcb``` 
  - Incicie o server do React : ```yarn start```

## Pronto para  usar :grin: 


### Um pouco mais sobre o projeto


1. Estrutura relacional do Postgress

- ![Captura de Tela 2022-03-08 às 14 37 24](https://user-images.githubusercontent.com/48262372/157294229-9e9a0039-3600-4c68-893c-bddcb6c279b3.png)
  
2. Estrutura do backend
- ![Captura de Tela 2022-03-08 às 14 48 26](https://user-images.githubusercontent.com/48262372/157297571-c0215cdb-937d-4b3d-81d9-98ae8d75be46.png)

- controllers: responsável pela comunicação das rotas com os services
- database: responsável por conectar com banco e o repositorio das migrations
- entitiies: como nome já diz, ficará as entidades!
- services: responsável pela parte de regra de negócio necessária
- routes.ts: responsável pela criação das rotas para api

3. Estrutura do FrontEnd
 - ![Captura de Tela 2022-03-08 às 15 20 09](https://user-images.githubusercontent.com/48262372/157301077-0eb2ea06-b4ac-4cd7-a851-01bba8211a75.png)
 
- componetes: responsavel por armazenar os componentes das páginas
- pages: Local onde fica as páginas
- Services: responsavel pela comunicação com api

  

