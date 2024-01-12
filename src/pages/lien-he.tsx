import Head from "next/head";

function ContactPage() {

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <Head>
                <title>Liên hệ- Công ty Meomeo</title>
                <meta property="og:title" content={"Liên hệ- Công ty Meomeo"} key="title" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={"Liên hệ với chúng tôi"} key="description" />
                <meta property="og:image" content={'/logo.jpg'} key="image" />
                <meta property="og:locale" content="vi_VN" />
            </Head>
           lien he cty
        </div>
    )
}

export default ContactPage