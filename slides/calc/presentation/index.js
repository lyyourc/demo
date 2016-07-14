// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  avatar: require("../assets/img/avatar.png"),
  frog: require("../assets/img/frog.png"),
  wizard: require("../assets/img/wizard.jpg"),
  cow: require('../assets/img/holycow.png'),
  dude: require('../assets/img/dude.jpg'),
  shuntingYard: require('../assets/img/shunting_yard.svg'),
  ast: require('../assets/img/ast.png'),
  logo: require("../assets/img/formidable-logo.svg"),
  markdown: require("../assets/img/markdown.png")
};
preloader(images);

// code sources
const code = require('../assets/code/problem')
const tokenizer = require('../assets/code/tokenizer')
const toRPN = require('../assets/code/toRPN')
const calc = require('../assets/code/index')
const parser = require('../assets/code/parser')


const theme = createTheme({
  primary: "#ff4081"
});


export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={0}>
          {/* Heading */}

          <Slide transition={["zoom"]} bgColor="primary">
            <Image src={images.avatar.replace("/", "")} />

            <Heading fit caps lineHeight={1} textColor="white">
              梁远成
            </Heading>

            <List>
              <ListItem> GitHub: @DrakeLeung </ListItem>
              <ListItem> Weibo: @DrakeLeung </ListItem>
            </List>

          </Slide>

          { /* Image */ }
          <Slide transition={["slide"]} bgColor="white">
            <Heading fit textColor="primary">
              魔法师
            </Heading>
          </Slide>
          <Slide transition={["slide"]} align="center center">
            <Image src={images.wizard.replace("/", "")} height="600px"/>
          </Slide>

          { /* CodeSlide */ }
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={code}
            ranges={[
              { loc: [0, 0], title: '四则运算求值' },
              { loc: [0, 10], note: '函数的定义' },
              { loc: [11, 16], note: '一些规则' },
              { loc: [17, 22], note: '测试例子' }
            ]}
          />

          { /* Appear */ }
          <Slide transition={["slide"]} bgColor="white" textColor="primary"
            notes="那我们先来看看最简单的"
          >
            <List>
              <Appear fid="1">
                <ListItem textSize="3em"> 1 + 2 * 3 / 4 - 5 </ListItem>
              </Appear>
              <Appear fid="2">
                <ListItem textSize="3em"> 1 + 2 * (3 / 4) - 5 </ListItem>
              </Appear>
              <Appear fid="3">
                <ListItem textSize="3em"> 1 + 2 * ((3 / 4) - 5) </ListItem>
              </Appear>
              <Appear fid="4">
                <ListItem textSize="3em">
                  ((1 + 2) * ((((((...)))))))
                </ListItem>
              </Appear>
            </List>
          </Slide>

          { /* paren hell */ }
          <Slide align="center center"
            transition={["slide"]}
            notes="能不能没有括号，没有优先级别，直接按顺序就好啦"
          >
            <Heading fit> Paren Hell </Heading>
            <Image src={images.cow.replace("/", "")} />
          </Slide>

          { /* Flex Layout */ }
          <Slide transition={["zoom", "fade"]} bgColor="white">
            <Layout>
              <Fill>
                <Heading size={4} textColor="white"
                  bgColor="primary" padding="80px"
                >
                  3 + 4
                </Heading>
                <Text> 中缀 </Text>
              </Fill>
              <Fill>
                <Heading padding="80px" textColor="black"> &rarr; </Heading>
              </Fill>
              <Appear>
                <Fill>
                    <Heading size={4} textColor="white"
                      bgColor="primary" padding="80px"
                    >
                      3 4 +
                    </Heading>
                    <Text> 逆波兰 </Text>
                </Fill>
              </Appear>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="white">
            <Layout>
              <Fill>
                <Heading size={4} textColor="white"
                  bgColor="primary" padding="80px 0"
                >
                  3 − (4 × 5)
                </Heading>
              </Fill>
              <Fill>
                <Heading padding="80px" textColor="black"> &rarr; </Heading>
              </Fill>
              <Appear>
                <Fill>
                  <Heading
                    bgImage={images.dude.replace("/", "")}
                    padding="80px"
                  > &nbsp;
                  </Heading>
                  <Text textColor="black"> 逆波兰 </Text>
                </Fill>
              </Appear>
            </Layout>
          </Slide>

          { /* shunting-yard algorithm */ }
          <Slide transition={["zoom"]} bgColor="secondary">
            <Heading fit>
              <Link
                textColor="primary"
                href="https://en.wikipedia.org/wiki/Shunting-yard_algorithm"
              >
                Shunting-yard algorithm
             </Link>
            </Heading>
            <Text margin="40px 0" textColor="white"> 调度场算法 </Text>
          </Slide>
          <Slide bgColor="white" align="center flex-start">
            <Image src={ images.shuntingYard.replace("/", "")}
              margin="-45px 0 0 0"
            />
          </Slide>

          { /* tokenizer */ }
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={tokenizer}
            ranges={[
              { loc: [0, 0], title: 'tokenizer' },
              { loc: [7, 8], note: '循环每个字符' },
              { loc: [10, 20], note: '括号' },
              { loc: [21, 34], note: '操作符' },
              { loc: [34, 50], note: '数字' }
            ]}
          />

          { /* toRPN */}
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={toRPN}
            ranges={[
              { loc: [0, 0], title: 'toRPN' },
              { loc: [5, 6], note: '运算符栈' },
              { loc: [8, 9], note: '循环每个 token' },
              { loc: [11, 15], note: '数字' },
              { loc: [15, 16], note: '操作符' },
              { loc: [16, 25], note: '如果当前 token 的优先级 < 栈顶元素的优先级' },
              { loc: [26, 30], note: '左括号' },
              { loc: [33, 38], note: '栈顶的不为左括号' },
              { loc: [39, 41], note: '直到栈顶为左括号时' },
              { loc: [44, 49], note: '最后一次循环，如果栈顶不为空' }
            ]}
          />

          { /* calc */}
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={calc}
            ranges={[
              { loc: [0, 0], title: 'CALCULATOR' },
              { loc: [7, 8], note: 'tokenizer' },
              { loc: [8, 9], note: 'RPN' },
              { loc: [9, 10], note: '操作数栈' },
              { loc: [11, 12], note: '遍历每个 token' },
              { loc: [14, 18], note: '数字' },
              { loc: [19, 22], note: '操作符' },
              { loc: [24, 40], note: '判断操作符' },
              { loc: [44, 45], note: '把计算好的新数字 push 到栈里' },
              { loc: [48, 49], note: '最后，栈顶的元素就是所求的值' }
            ]}
          />

          { /* Quote */ }
          <Slide transition={["slide"]} bgColor="white">
            <BlockQuote>
              <Quote> 我们还能做些更有趣的事情 :)</Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading> AST (抽象语法树) </Heading>
            <Image src={ images.ast.replace("/", "")} />
          </Slide>

          { /* parser */}
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={parser}
            ranges={[
              { loc: [0, 0], title: 'parser' },
              { loc: [5, 6], note: '操作数栈' },
              { loc: [7, 8], note: '遍历每个 token' },
              { loc: [10, 13], note: '数字' },
              { loc: [14, 15], note: '操作符' },
              { loc: [15, 21], note: '节点' },
              { loc: [22, 23], note: '把节点 push 到操作数栈里' },
              { loc: [26, 30], note: '最后把栈顶的元素 pop 出来' }
            ]}
          />

          {/* Markdown */}
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              源代码地址
            </Heading>
            <Text size={1}
              bgColor="black" textColor="primary"
              padding="80px" margin="80px 0"
            >
              https://github.com/DrakeLeung/calc
            </Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
