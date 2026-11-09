import { useState } from 'react';
import './app-landing.css';

export default function AppLanding({ english = false }: { english?: boolean }) {
  const [style, setStyle] = useState(0);
  const t = (zh: string, en: string) => (english ? en : zh);
  const styles = [
    t('经典留白', 'Classic'),
    t('暗房印记', 'Darkroom'),
    t('朱红签章', 'Signature'),
  ];

  function Photo({ variant = 0 }: { variant?: number }) {
    return (
      <figure className={`ex-photo ex-photo--${variant}`}>
        <img
          src="/landing/alpine.jpg"
          alt={t('云雾之间的雪山', 'A mountain rising through the clouds')}
          width="900"
          height="600"
        />
        <figcaption>
          <div>
            <strong>{variant === 2 ? 'E.' : 'ALPINE NOTES'}</strong>
            <span> A moment, kept.</span>
          </div>
          <div className="ex-photo__exif">
            <b>35mm · ƒ/2.8</b>
            <span>1/1000s · ISO 100</span>
          </div>
        </figcaption>
      </figure>
    );
  }

  return (
    <div className="ex-landing">
      <section className="ex-hero" aria-labelledby="ex-title">
        <div className="ex-hero__copy">
          <p className="ex-eyebrow">
            <span /> EXIFED / PHOTO SIGNATURE
          </p>
          <h1 id="ex-title">
            {t('照片，', 'Your photo.')}
            <br />
            {t('加上', 'Your ')}
            <em>{t('你的水印。', 'signature.')}</em>
          </h1>
          <p className="ex-lead">
            {t(
              '把拍摄的故事，留在照片里。',
              'Keep the story inside the frame.',
            )}
            <br />
            {t(
              '一点参数，一枚签名，让每一次分享都有你的风格。',
              'A few details. A personal mark. Make every photo feel like you.',
            )}
          </p>
          <div className="ex-actions">
            <a className="ex-button" href="#download">
              {t('获取 Exifed', 'Get Exifed')} <span aria-hidden="true">↗</span>
            </a>
            <a className="ex-text-link" href="#templates">
              {t('探索水印风格', 'Explore the styles')}{' '}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="ex-note">
            {t(
              '产品概念预览 · 界面与参数为 mock 示例',
              'Product concept · Mock interfaces and photo metadata',
            )}
          </p>
        </div>
        <div className="ex-hero__visual">
          <span className="ex-visual-label">01 / THE MOMENT</span>
          <div className="ex-hero__print">
            <Photo />
          </div>
          <div
            className="ex-phone"
            aria-label={t('Exifed 编辑界面示意', 'Mock Exifed editor')}
          >
            <div className="ex-phone__island" />
            <div className="ex-phone__bar">
              <span aria-hidden="true">‹</span>
              <b>{t('照片水印', 'Watermark')}</b>
              <span className="ex-phone__done">{t('完成', 'Done')}</span>
            </div>
            <div className="ex-phone__preview">
              <Photo variant={2} />
            </div>
            <div className="ex-phone__panel">
              <span>{t('让风格，刚刚好。', 'Make it your own.')}</span>
              <div className="ex-swatches">
                <i />
                <i />
                <i />
              </div>
              <div className="ex-phone__slider" />
              <div className="ex-phone__tools">
                <span>{t('模板', 'Style')}</span>
                <span>{t('参数', 'Details')}</span>
                <span>{t('签名', 'Signature')}</span>
              </div>
            </div>
          </div>
          <span className="ex-visual-caption">
            SHOT WITH FEELING. SIGNED BY YOU.
          </span>
        </div>
      </section>

      <div className="ex-manifesto">
        <span>LESS DECORATION.</span>
        <p>
          {t(
            '让照片做主角，让细节说故事。',
            'Let the photo lead. Let the details tell the story.',
          )}
        </p>
        <span>MORE YOU.</span>
      </div>

      <section
        className="ex-showcase"
        id="templates"
        aria-labelledby="ex-styles"
      >
        <div className="ex-section-heading">
          <div>
            <p className="ex-eyebrow">02 / FIND YOUR FRAME</p>
            <h2 id="ex-styles">
              {t('同一张照片，', 'One photo.')}
              <br />
              {t('不止一种表达。', 'More than one way to tell it.')}
            </h2>
          </div>
          <p>
            {t(
              '从干净的留白，到有温度的签章。',
              'From quiet whitespace to a signature with character.',
            )}
            <br />
            {t(
              '选一个风格，看照片换一种心情。',
              'Choose a style. Give the moment a different feeling.',
            )}
          </p>
        </div>
        <div className="ex-style-demo">
          <div className="ex-style-demo__photo">
            <Photo variant={style} />
          </div>
          <div className="ex-style-demo__controls">
            <p className="ex-eyebrow">THE COLLECTION / 0{style + 1}</p>
            <h3>{styles[style]}</h3>
            <p>
              {
                [
                  t(
                    '给画面多一点呼吸，给回忆留一点位置。',
                    'Room for the image to breathe, and the memory to stay.',
                  ),
                  t(
                    '深色边框收住光影，像一张刚冲洗好的相片。',
                    'A dark frame that holds the light, like a freshly developed print.',
                  ),
                  t(
                    '一抹朱红落在照片边缘，留下属于你的落款。',
                    'A touch of vermilion, a mark that is distinctly yours.',
                  ),
                ][style]
              }
            </p>
            <div
              className="ex-style-options"
              role="group"
              aria-label={t('选择水印风格', 'Choose a watermark style')}
            >
              {styles.map((name, index) => (
                <button
                  key={name}
                  type="button"
                  aria-pressed={style === index}
                  onClick={() => setStyle(index)}
                >
                  <span>0{index + 1}</span>
                  {name}
                  <span aria-hidden="true">{style === index ? '●' : '○'}</span>
                </button>
              ))}
            </div>
            <small>
              {t(
                '交互式排版示例，非 App 实际截图',
                'Interactive layout demo, not an actual App screenshot',
              )}
            </small>
          </div>
        </div>
      </section>

      <section className="ex-process" aria-labelledby="ex-process-title">
        <div className="ex-section-heading">
          <div>
            <p className="ex-eyebrow">03 / A LITTLE PERSONAL TOUCH</p>
            <h2 id="ex-process-title">
              {t('从照片，到你的作品。', 'From a photo to something yours.')}
            </h2>
          </div>
        </div>
        <div className="ex-steps">
          {[
            [
              t('选一张喜欢的照片', 'Start with a photo'),
              t(
                '一次旅行，一段日常，或刚好遇见的一束光。',
                'A journey, an ordinary day, or a little light you happened to find.',
              ),
            ],
            [
              t('加一点自己的风格', 'Add your own touch'),
              t(
                '搭配水印、拍摄参数与签名，找到舒服的比例。',
                'Pair a frame with photo details and a signature. Find your balance.',
              ),
            ],
            [
              t('让故事继续', 'Let the story travel'),
              t(
                '留下这一刻的细节，把完成的作品分享出去。',
                'Keep the details of the moment, then share your finished image.',
              ),
            ],
          ].map(([title, text], index) => (
            <article key={title}>
              <span className="ex-step-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="ex-download"
        id="download"
        aria-labelledby="ex-download-title"
      >
        <img
          src="/brand/app-icon-512.png"
          alt="Exifed"
          width="80"
          height="80"
          loading="lazy"
        />
        <p className="ex-eyebrow">MAKE IT YOURS.</p>
        <h2 id="ex-download-title">
          {t('下一张照片，', 'Your next photo,')}
          <br />
          {t('留下你的印记。', 'with your signature.')}
        </h2>
        <p>
          {t(
            'Exifed，让每一张分享的照片，都带着你的风格。',
            'Exifed. A personal touch for every photo you share.',
          )}
        </p>
        <div className="ex-store-buttons">
          <button type="button" disabled>
            iOS <span>{t('即将开放', 'Coming soon')}</span>
          </button>
          <button type="button" disabled>
            Android <span>{t('即将开放', 'Coming soon')}</span>
          </button>
        </div>
        <small>
          {t(
            '下载区域为 mock 占位，正式链接待接入。',
            'Mock download section. Store links will be added later.',
          )}
        </small>
      </section>
      <footer className="ex-footer">
        <span>Exifed / Photo Signature</span>
        <span>{t('页面内容为概念演示', 'Concept preview')}</span>
        <a
          href="https://unsplash.com/photos/snow-capped-mountains-with-valley-and-forest-Bkci_8qcdvQ"
          target="_blank"
          rel="noreferrer"
        >
          {t('摄影', 'Photo')}: Kalen Emsley / Unsplash ↗
        </a>
      </footer>
    </div>
  );
}
