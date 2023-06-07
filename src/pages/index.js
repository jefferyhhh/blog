import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

import HeroImg from '../../static/img/hero.png'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function MyHero() {
  return(
    <div className={styles.myHeroContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.leftContainer_h1}>
        Jeffery's blog
        </h1>
        <p className={styles.leftContainer_p}>
          Tomorrow is another day. <br />
          <br />
          记录知识、分享乐趣的快乐小屋~
          <br />
          欢迎浏览，希望对你也有帮助。
        </p>
        <div className={styles.buttonContainer}>
            {/* <button className={styles.button}>
            <a className={styles.hero_a} href='/'>
            Click
            </a>
            </button>
            <span className={styles.buttonLeftText}>
            Get Started. <br /> 开启学习之旅.
            </span> */}
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img src={HeroImg} alt='HeroImg' />
      </div>
    </div>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // title={`${siteConfig.title}`}
      title="刘泽桦博客"
      description="刘泽桦的个人网站，主要分享前端相关技术博客、知识笔记">
      
      <main>
        <MyHero/>
      </main>
    </Layout>
  );
}
