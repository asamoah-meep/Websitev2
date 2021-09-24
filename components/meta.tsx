import Head from 'next/head'
import React from 'react'

class Meta extends React.Component<{},{}>{

    render(){
        return   <Head>
        <title>jefasamoah.now.sh</title>
        <meta name="description" content="Your Cryptocurrency Portfolio" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"/>      </Head>
      
    }
}

export default Meta;