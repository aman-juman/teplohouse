import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
    static async getInitialsProps(ctx:DocumentContext):Promise<DocumentInitialProps>{
      const initialProps = await Document.getInitialProps(ctx);
      return {...initialProps};
    }
    render(): JSX.Element {
        return (
            <Html lang="ru">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                            <link
                                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
                                rel="stylesheet" />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}