import React, {memo} from 'react';
import {StyleSheet, Text as Original, View} from 'react-native';
import {ScrollView} from '../../conversions';
import {useColor} from '../../hooks';
import {config, FontType} from '../../utils';
import {Text} from '../Text';

export interface ContentBody {
  sections: Sections;
}
type Sections = Section[];
interface Section {
  title: string;
  titleType: FontType;
  paragraphs: Paragraphs;
}
type Paragraphs = Paragraph[];
interface Paragraph {
  sentences: Sentences;
}
type Sentences = Sentence[];
type Sentence = Phrase | Link;
interface Phrase {
  content: string;
  type: 'phrase';
  onPress?(): void;
}
interface Link {
  content: string;
  type: 'link';
  onPress(): void;
}

interface Props {
  body: ContentBody;
}

// TODO: use Sentence component
export const Content = memo(({body}: Props) => {
  const color = useColor();
  const styles = StyleSheet.create({
    content: {
      paddingHorizontal: config.padding(4),
    },
    link: {
      color: color.primary,
    },
    paragraph: {
      paddingBottom: config.padding(2),
    },
    section: {
      paddingBottom: config.padding(4),
    },
    title: {
      paddingBottom: config.padding(2),
    },
  });

  return (
    <ScrollView contentContainerStyle={styles.content}>
      {body.sections.map((section, sectionIndex) => (
        <View key={`s-${sectionIndex}`} style={styles.section}>
          {section.title && (
            <Text
              key={section.title}
              style={styles.title}
              title={section.title}
              type={section.titleType}
            />
          )}
          {section.paragraphs.map((paragraph, paragraphIndex) => (
            <Original key={`p-${paragraphIndex}`} style={styles.paragraph}>
              {paragraph.sentences.map(({onPress, content, type}) =>
                type === 'link' ? (
                  <Text
                    key={content}
                    onPress={onPress}
                    style={styles.link}
                    title={`${content} `}
                  />
                ) : (
                  <Text key={content} title={`${content} `} />
                ),
              )}
            </Original>
          ))}
        </View>
      ))}
    </ScrollView>
  );
});
