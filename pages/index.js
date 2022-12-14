import Head from 'next/head'
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Home() {
    return (
        <div className={""}>
            <Head>
                <title>3doths</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Navbar/>
            <main className={""}>
                <div className="row1">
                    <div className="img">
                        <Image height={500} width={500} src="/assets/img1.png" alt="1"/>
                    </div>
                    <div className="text">
                        <div style={{gridColumnStart: 1, gridColumnEnd: 3, lineHeight: 0.7}}
                             className={"text-serif-styled"}>BRING
                        </div>
                        <div className={"object"}>Our objective is to promote and advance sustainable democracy and to
                            improve
                        </div>
                        <div><img src="/assets/img3.png" alt="img"/></div>
                        <div style={{gridColumnStart: 2, gridColumnEnd: 4, lineHeight: 0.7, marginLeft: 60}}
                             className={"text-serif-styled"}>IDEAS
                        </div>
                    </div>
                </div>
                <div className="row2">
                    <div className="part1">
                        <p>01 _______</p>
                        <div className={"head"}>
                            <p>Assets</p>
                            <h2>Minimalist</h2>
                        </div>
                        <div className="body">
                            We&apos;re a creative branding studio <br/> dedicated to creating high-end
                            <br/>
                            design resources
                        </div>
                    </div>
                    <div className="part2">
                        <img src="/assets/img4.png" height={"95%"} alt=""/>
                    </div>
                    <div className="part3">
                            <div className="text1">
                                <div className="img"><img src="/assets/img5.png" alt=""/></div>
                                <p>Add depth to your next <br/> project with Minimalist</p>
                            </div>
                            <div className="text2">
                                <h2>
                                    THAT ELEVATE YOUR <br/> BUSINESS WITHOUT <br/> BREAKING
                                </h2>
                            </div>
                    </div>
                    <div className="part4">
                        <img src="/assets/img2.png" height={"95%"} alt=""/>
                    </div>
                </div>
            </main>
        </div>
    )
}
