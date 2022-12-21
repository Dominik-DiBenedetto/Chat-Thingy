import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/chatroom.module.css";
import MyPfp from "../public/MyPfp.png"
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    let [collapsed, setCollapsed] = useState("");

    function collapse(e: any) {
        e.preventDefault();

        if (!e.target) return;
        const classList = e.target.classList;

        for (let i = 0; i < classList.length; i++) {
            if (classList[i].includes("server")) {
                if (collapsed === "chatroom_server-bar-collapse__5KMPP") {
                    return setCollapsed("chatroom_server-bar-appear__AfYk2");
                }
                return setCollapsed("");
            }
        }

        setCollapsed("chatroom_server-bar-collapse__5KMPP");
    }

    return (
        <div onClick={collapse} className={styles["window"]}>
            <Head>
                <script
                    type="module"
                    src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
                ></script>
                <script
                    noModule
                    src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
                ></script>
                <title>My Page</title>
            </Head>

            <nav className={styles.navbar}>
                <div className={`${styles["server-list"]} ${collapsed}`}>
                    <div className={styles["icons-wrapper"]}>
                        <ul className={styles["server-icons"]}>
                            <li
                                className={`${styles["server-icon"]} ${styles["server-list-elm"]}`}
                                data-tooltip="My Server"
                                data-users-online="2"
                                data-notifications="3"
                            ></li>
                            <li
                                className={`${styles["server-icon"]} ${styles["server-list-elm"]}`}
                                data-tooltip="Rocket League"
                                data-users-online="1.2k"
                                data-notifications="999"
                            ></li>
                            <li
                                className={`${styles["server-icon"]} ${styles["server-list-elm"]}`}
                                data-tooltip="ESUMS People"
                                data-users-online="59"
                                data-notifications="9"
                            ></li>
                        </ul>
                    </div>
                    <ul className={`${styles["server-built-ins"]}`}>
                        <li
                            className={`${styles["server-list-elm"]} ${styles["server-built-in"]}`}
                            data-tooltip="New Server"
                        >
                            <ion-icon name="add-outline"></ion-icon>
                        </li>
                        <li
                            className={`${styles["server-list-elm"]} ${styles["server-built-in"]}`}
                            data-tooltip="Settings"
                        >
                            <ion-icon name="settings-outline"></ion-icon>
                        </li>
                        <li
                            className={`${styles["server-list-elm"]} ${styles["server-built-in"]}`}
                            data-tooltip="Profile"
                        >
                            <ion-icon name="person-outline"></ion-icon>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className={styles["chat-window"]}>
                <div className={styles["messages-holder"]}>
                    <div className={styles["messages"]}>
                        <div className={`${styles["message"]}`}>
                            <div className={`${styles["msg-head"]}`}>
								<div className={`${styles["sender"]}`}>
									<Image src={MyPfp} alt="Pfp" className={`${styles["sender-pfp"]}`}></Image>
								</div>
								<div className={`${styles["date-time-who"]}`}>
									<span className={styles['who']}>TSL</span>
									<ul className={styles['when']}>
										<li className={styles['when-date']}>Dec 20</li>
										<li className={styles['when-time']}>4:54pm</li>
									</ul>
								</div>
							</div>
							<div className={`${styles["msg-body"]}`}>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam excepturi id ducimus, deserunt impedit repellendus nostrum explicabo dignissimos blanditiis beatae quibusdam velit quisquam repellat? Debitis magni obcaecati illum dolorum quos quo itaque eum commodi non! Explicabo incidunt enim sequi voluptas perferendis et, dolorem hic aliquam mollitia eveniet quaerat laudantium ad.
							</div>
                        </div>
						<div className={`${styles["message"]}`}>
                            <div className={`${styles["msg-head"]}`}>
								<div className={`${styles["sender"]}`}>
									<Image src={MyPfp} alt="Pfp" className={`${styles["sender-pfp"]}`}></Image>
								</div>
								<div className={`${styles["date-time-who"]}`}>
									<span className={styles['who']}>TSL</span>
									<ul className={styles['when']}>
										<li className={styles['when-date']}>Dec 21</li>
										<li className={styles['when-time']}>5:44pm</li>
									</ul>
								</div>
							</div>
							<div className={`${styles["msg-body"]}`}>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, ea.
							</div>
                        </div>
						<div className={`${styles["message"]}`}>
                            <div className={`${styles["msg-head"]}`}>
								<div className={`${styles["sender"]}`}>
									<Image src={MyPfp} alt="Pfp" className={`${styles["sender-pfp"]}`}></Image>
								</div>
								<div className={`${styles["date-time-who"]}`}>
									<span className={styles['who']}>TSL</span>
									<ul className={styles['when']}>
										<li className={styles['when-date']}>Dec 21</li>
										<li className={styles['when-time']}>8:33pm</li>
									</ul>
								</div>
							</div>
							<div className={`${styles["msg-body"]}`}>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam excepturi id ducimus, deserunt impedit repellendus nostrum explicabo dignissimos blanditiis beatae quibusdam velit quisquam repellat? Debitis magni obcaecati illum dolorum quos quo itaque eum commodi non! Explicabo incidunt enim sequi voluptas perferendis et, dolorem hic aliquam mollitia eveniet quaerat laudantium ad.
							</div>
                        </div>
						<div className={`${styles["message"]}`}>
                            <div className={`${styles["msg-head"]}`}>
								<div className={`${styles["sender"]}`}>
									<Image src={MyPfp} alt="Pfp" className={`${styles["sender-pfp"]}`}></Image>
								</div>
								<div className={`${styles["date-time-who"]}`}>
									<span className={styles['who']}>TSL</span>
									<ul className={styles['when']}>
										<li className={styles['when-date']}>Dec 22</li>
										<li className={styles['when-time']}>6:54am</li>
									</ul>
								</div>
							</div>
							<div className={`${styles["msg-body"]}`}>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam excepturi id ducimus, deserunt impedit repellendus nostrum explicabo dignissimos blanditiis beatae quibusdam velit quisquam repellat? Debitis magni obcaecati illum dolorum quos quo itaque eum commodi non! Explicabo incidunt enim sequi voluptas perferendis et, dolorem hic aliquam mollitia eveniet quaerat laudantium ad.
							</div>
                        </div>
                    </div>
                </div>
                <div className={styles["chat-box-holder"]}>
                    <div className={styles["chat-box-wrapper"]}>
                        <textarea
                            className={`${styles["chat-box"]}`}
                            placeholder="Send A Message"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
