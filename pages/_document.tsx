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
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap"
                    />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}