import React, { useState, useEffect } from "react";
import styles from "../styles/SnapDocsAccordion.module.css";
import Image from "next/image";
import tabOneImage from "../images/snapdocs/Lender-Accordion-eVault.webp";
import tabTwoImage from "../images/snapdocs/Title-Escrow.webp";
import tabThreeImage from "../images/snapdocs/Scheduling.webp";
import tabFourImage from "../images/snapdocs/Notary-signing-Agents.webp";

const SnapDocs = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [lastActiveTab, setLastActiveTab] = useState(null);

  const handleTabClick = (tabNumber) => {
    if (activeTab === tabNumber) {
      setLastActiveTab(activeTab);
      setActiveTab(null);
    } else {
      setLastActiveTab(activeTab);
      setActiveTab(tabNumber);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={
          activeTab !== null
            ? `${styles.cardTaller} ${activeTab === 1 ? styles.active : ""}`
            : styles.card
        }
      >
        <div className={styles.headerTitles}>
          <h1>Connecting the industry through digital closing solutions</h1>
          <h3>
            Select your organization type to learn how Snapdocs can help you
            save time and money on every transaction.
          </h3>
        </div>
        <div className={styles.accordionContainer}>
          <div className={styles.tabs}>
            <div className={styles.tab} onClick={() => handleTabClick(1)}>
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
            <div className={styles.tab} onClick={() => handleTabClick(2)}>
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
            <div className={styles.tab} onClick={() => handleTabClick(3)}>
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

            <div className={styles.tab} onClick={() => handleTabClick(4)}>
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

          <div className={styles.tabsContents}>
            <div>
              <div
                className={`${styles.image} ${
                  activeTab === 1 ? styles.imageMoved : ""
                }`}
                style={{
                  zIndex: activeTab === 1 ? 27 : lastActiveTab === 1 ? 21 : 17,
                }}
              >
                <Image src={tabOneImage} width={500} height={500} />
              </div>
              <div
                className={`${styles.blank} ${
                  activeTab === 1 || lastActiveTab !== 1
                    ? styles.blankMoved
                    : ""
                }`}
                style={{
                  zIndex: activeTab === 1 ? 27 : lastActiveTab === 1 ? 21 : 17,
                }}
              ></div>
            </div>

            <div>
              <div
                className={`${styles.image} ${
                  activeTab === 2 ? styles.imageMoved : ""
                }`}
                style={{
                  zIndex: activeTab === 2 ? 28 : lastActiveTab === 2 ? 22 : 18,
                }}
              >
                <Image src={tabTwoImage} width={500} height={500} />
              </div>
              <div
                className={`${styles.blank} ${
                  activeTab === 2 || lastActiveTab !== 2
                    ? styles.blankMoved
                    : ""
                }`}
                style={{
                  zIndex: activeTab === 2 ? 28 : lastActiveTab === 2 ? 22 : 18,
                }}
              ></div>

              <div>
                <div
                  className={`${styles.image} ${
                    activeTab === 3 ? styles.imageMoved : ""
                  }`}
                  style={{
                    zIndex:
                      activeTab === 3 ? 29 : lastActiveTab === 3 ? 23 : 19,
                  }}
                >
                  <Image src={tabThreeImage} width={500} height={500} />
                </div>
                <div
                  className={`${styles.blank} ${
                    activeTab === 3 || lastActiveTab !== 3
                      ? styles.blankMoved
                      : ""
                  }`}
                  style={{
                    zIndex:
                      activeTab === 3 ? 29 : lastActiveTab === 3 ? 23 : 19,
                  }}
                ></div>
              </div>

              <div>
                <div
                  className={`${styles.image} ${
                    activeTab === 4 ? styles.imageMoved : ""
                  }`}
                  style={{
                    zIndex:
                      activeTab === 4 ? 30 : lastActiveTab === 4 ? 24 : 10,
                  }}
                >
                  <Image src={tabFourImage} width={500} height={500} />
                </div>
                <div
                  className={`${styles.blank} ${
                    activeTab === 4 || lastActiveTab !== 4
                      ? styles.blankMoved
                      : ""
                  }`}
                  style={{
                    zIndex:
                      activeTab === 4 ? 30 : lastActiveTab === 4 ? 24 : 10,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnapDocs;
