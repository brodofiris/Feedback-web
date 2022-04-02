/* This source code is exported from pxCode, you can get more document from https://www.pxcode.io */
import React from 'react';
import cn from 'classnames';

import section1Styles from './Feedback_section1.module.scss';
import styles from './Feedback.module.scss';

function renderSection1(props) {
  return (
    <section
      className={cn(section1Styles.section1, section1Styles.section1_layout)}>
      <div className={cn(section1Styles.group, section1Styles.group_layout3)}>
        <div className={cn(section1Styles.flex, section1Styles.flex_layout)}>
          <div
            className={cn(
              section1Styles.content_box,
              section1Styles.content_box_layout
            )}>
            <div className={cn(section1Styles.content_box_item)}>
              <div
                className={cn(section1Styles.txt, section1Styles.txt_layout)}>
                {'О нас'}
              </div>
            </div>
            <div className={cn(section1Styles.content_box_spacer)} />
            <div className={cn(section1Styles.content_box_item1)}>
              <div
                className={cn(section1Styles.txt1, section1Styles.txt1_layout)}>
                {'Благотворительность'}
              </div>
            </div>
            <div className={cn(section1Styles.content_box_spacer1)} />
            <div className={cn(section1Styles.content_box_item2)}>
              <div
                className={cn(
                  section1Styles.txt2_box,
                  section1Styles.txt2_box_layout
                )}>
                <pre className={cn(section1Styles.txt2)}>{'Обучение\n'}</pre>
              </div>
            </div>
            <div className={cn(section1Styles.content_box_spacer2)} />
            <div className={cn(section1Styles.content_box_item3)}>
              <div
                className={cn(
                  section1Styles.txt3_box,
                  section1Styles.txt3_box_layout
                )}>
                <pre className={cn(section1Styles.txt3)}>
                  {'Несовершеннолетние\n'}
                </pre>
              </div>
            </div>
            <div className={cn(section1Styles.content_box_spacer3)} />
            <div className={cn(section1Styles.content_box_item4)}>
              <div
                className={cn(
                  section1Styles.cover_block,
                  section1Styles.cover_block_layout
                )}>
                <div
                  className={cn(
                    section1Styles.txt4,
                    section1Styles.txt4_layout
                  )}>
                  {'SOS'}
                </div>
              </div>
            </div>
          </div>

          <div className={cn(section1Styles.content_box_item5)}>
            <div
              className={cn(
                section1Styles.group,
                section1Styles.group_layout2
              )}>
              /*This group structure is not ready for flow layout, please
              resolve the 🐞 structure bug in pxCode editor.*/
            </div>
          </div>
        </div>

        <div
          className={cn(section1Styles.group2, section1Styles.group2_layout)}>
          /*This group structure is not ready for flow layout, please resolve
          the 🐞 structure bug in pxCode editor.*/
        </div>
      </div>

      <div className={cn(section1Styles.content_box_item6)}>
        <div
          className={cn(section1Styles.group4, section1Styles.group4_layout)}>
          /*This group structure is not ready for flow layout, please resolve
          the 🐞 structure bug in pxCode editor.*/
        </div>
      </div>
    </section>
  );
}

export default function Feedback(props) {
  return (
    <main className={`feedback ${cn(styles.main, styles.main_layout)}`}>
      {renderSection1(props)}
    </main>
  );
}

Feedback.inStorybook = true;
