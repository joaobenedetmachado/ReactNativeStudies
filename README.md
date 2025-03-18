# Configurando um Projeto React Native com Expo

## Pré-requisitos
Antes de começar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (LTS recomendado)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)
- Editor de código (VS Code recomendado)

## Passo 1: Instalar Expo CLI
Abra o terminal e execute:
```sh
npm install -g expo-cli
```

## Passo 2: Criar um Novo Projeto
Execute o seguinte comando para criar um projeto com template blank:
```sh
npx create-expo-app MeuProjeto --template blank
```

Substitua `MeuProjeto` pelo nome do seu projeto.

## Passo 3: Navegar até a Pasta do Projeto
```sh
cd MeuProjeto
```

## Passo 4: Executar o Projeto
Inicie o servidor de desenvolvimento:
```sh
npm start
```
Ou:
```sh
npx expo start
```

Isso abrirá o Expo Developer Tools no navegador.

## Passo 5: Testar no Emulador ou Dispositivo Físico
- **Android:** Instale o aplicativo Expo Go na Play Store e escaneie o QR Code.
- **iOS:** No macOS, use o simulador do Xcode ou o Expo Go na App Store.

## Passo 6: Estrutura Básica do Projeto
O projeto gerado contém:
- `App.js` - Arquivo principal do aplicativo.
- `package.json` - Dependências e scripts.
- `node_modules/` - Pacotes instalados.

## Passo 7: Adicionar Bibliotecas
Para adicionar pacotes, use:
```sh
npm install pacote
```
Ou:
```sh
yarn add pacote
```

Exemplo, instalando React Navigation:
```sh
npm install @react-navigation/native
```

## Passo 8: Construir o Aplicativo
Para gerar um APK (Android) ou IPA (iOS):
```sh
npx expo prebuild
npx expo run:android
```

Ou para um build otimizado:
```sh
npx expo build:android
```

## Passo 9: Publicar o Aplicativo
Para publicar o app na Expo:
```sh
npx expo publish
```

## Conclusão
Agora você tem um ambiente React Native com Expo configurado! 🎉

