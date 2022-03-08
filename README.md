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