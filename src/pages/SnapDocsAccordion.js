import React, { useState, useEffect } from "react";
import styles from "../styles/SnapDocsAccordion.module.css";
import Image from "next/image";
import tabOneImage from "../images/snapdocs/Lender-Accordion-eVault.webp";
import tabTwoImage from "../images/snapdocs/Title-Escrow.webp";
import tabThreeImage from "../images/snapdocs/Scheduling.webp";
import tabFourImage from "../images/snapdocs/Notary-signing-Agents.webp";

const SnapDocs = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [prevActiveTab, setPrevActiveTab] = useState(1);
  const [specialTransition, setSpecialTransition] = useState(false);

  useEffect(() => {
    if (prevActiveTab === 3 && activeTab === 2) {
      setSpecialTransition(true);
    } else {
      setSpecialTransition(false);
    }
    setPrevActiveTab(activeTab);
  }, [activeTab]);

  return (
    <div className={styles.container}>
      <div className={activeTab !== null ? styles.cardTaller : styles.card}>
        <div className={styles.headerTitles}>
          <h1>Connecting the industry through digital closing solutions</h1>
          <h3>
            Select your organization type to learn how Snapdocs can help you
            save time and money on every transaction.
          </h3>
        </div>
        <div className={styles.accordionContainer}>
          <div className={styles.tabs}>
            <div
              className={styles.tab}
              onClick={() => setActiveTab(activeTab === 1 ? null : 1)}
            >
              <div className={styles.titleContainer}>
                <h1>Lender</h1>
                <span
                  className={
                    activeTab === 1
                      ? `${styles.chevron} ${styles.up}`
                      : styles.chevron
                  }
                ></span>
              </div>

              <div
                className={
                  styles.content +
                  (activeTab === 1 ? ` ${styles.contentVisible}` : "")
                }
              >
                <p>
                  Simplify the mortgage process for every closing with a
                  powerful pair of products: our award-winning eClose platform
                  and best-in-class eVault.
                </p>
                <div className={styles.ctaContainer}>
                  <span className={styles.learnMoreText}>Learn More</span>
                  <span className={styles.arrowCircle}>➔</span>
                </div>
              </div>
              <div className={styles.bottomLine}></div>
            </div>
            <div
              className={styles.tab}
              onClick={() => setActiveTab(activeTab === 2 ? null : 2)}
            >
              <div className={styles.titleContainer}>
                <h1>Title & Escrow</h1>
                <span
                  className={
                    activeTab === 2
                      ? `${styles.chevron} ${styles.up}`
                      : styles.chevron
                  }
                ></span>
              </div>

              <div
                className={
                  styles.content +
                  (activeTab === 2 ? ` ${styles.contentVisible}` : "")
                }
              >
                <p>
                  Simplify the mortgage process for every closing with a
                  powerful pair of products: our award-winning eClose platform
                  and best-in-class eVault.
                </p>
                <div className={styles.ctaContainer}>
                  <span className={styles.learnMoreText}>Learn More</span>
                  <span className={styles.arrowCircle}>➔</span>
                </div>
              </div>
              <div className={styles.bottomLine}></div>
            </div>
            <div
              className={styles.tab}
              onClick={() => setActiveTab(activeTab === 3 ? null : 3)}
            >
              <div className={styles.titleContainer}>
                <h1>Signing Service</h1>
                <span
                  className={
                    activeTab === 3
                      ? `${styles.chevron} ${styles.up}`
                      : styles.chevron
                  }
                ></span>
              </div>

              <div
                className={
                  styles.content +
                  (activeTab === 3 ? ` ${styles.contentVisible}` : "")
                }
              >
                <p>
                  Instantly source, vet, schedule, and pay for a qualified
                  notary anywhere in the country.
                </p>
                <div className={styles.ctaContainer}>
                  <span className={styles.learnMoreText}>Learn More</span>
                  <span className={styles.arrowCircle}>➔</span>
                </div>
              </div>
              <div className={styles.bottomLine}></div>
            </div>

            <div
              className={styles.tab}
              onClick={() => setActiveTab(activeTab === 4 ? null : 4)}
            >
              <div className={styles.titleContainer}>
                <h1>Notary Signing Agents</h1>
                <span
                  className={
                    activeTab === 4
                      ? `${styles.chevron} ${styles.up}`
                      : styles.chevron
                  }
                ></span>
              </div>

              <div
                className={
                  styles.content +
                  (activeTab === 4 ? ` ${styles.contentVisible}` : "")
                }
              >
                <p>
                  Access over 250,000 mobile and RON loan signing opportunities
                  each month, gain exposure to 100+ hiring companies, and
                  efficiently manage your business online.
                </p>
                <div className={styles.ctaContainer}>
                  <span className={styles.learnMoreText}>Learn More</span>
                  <span className={styles.arrowCircle}>➔</span>
                </div>
              </div>
              <div className={styles.bottomLine}></div>
            </div>
          </div>

          <div
            className={
              activeTab === null
                ? styles.tabsContentsShorter
                : styles.tabsContents
            }
          >
            <div className={styles.imageColumn}>
              <Image
                src={tabOneImage}
                alt="tab one"
                className={
                  activeTab === 1
                    ? prevActiveTab === 2
                      ? styles.activeFromBottom
                      : styles.activeFromTop
                    : prevActiveTab === 1
                    ? styles.prev
                    : ""
                }
              />

              <Image
                src={tabTwoImage}
                alt="tab two"
                className={
                  activeTab === 2
                    ? specialTransition
                      ? ` ${styles.activeFromTopSpecial} ${styles.quickTransition}`
                      : styles.activeFromBottom
                    : prevActiveTab === 2
                    ? styles.prev
                    : ""
                }
              />

              <Image
                src={tabThreeImage}
                alt="tab three"
                className={
                  activeTab === 3
                    ? prevActiveTab === 1
                      ? styles.activeFromTop
                      : styles.activeFromBottom
                    : prevActiveTab === 3
                    ? styles.prev
                    : ""
                }
              />

              <Image
                src={tabFourImage}
                alt="tab four"
                className={
                  activeTab === 4
                    ? prevActiveTab === 3
                      ? styles.activeFromBottom
                      : styles.activeFromTop
                    : prevActiveTab === 4
                    ? styles.prev
                    : ""
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnapDocs;
