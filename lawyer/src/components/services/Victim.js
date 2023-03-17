/** @format */

import { OrderedList, ListItem, Text, Box } from "@chakra-ui/react";

export const Victim = () => {
  return (
    <Box as='section'>
      <Text>
        Якщо ви стали жертвою злочину, можливо, вам цікаво, як вам може
        допомогти адвокат. Адвокат може надати вам юридичну консультацію,
        представництво та адвокатську підтримку протягом усього кримінального
        процесу. Ось кілька способів, якими адвокат може допомогти вам як жертві
        злочину:
      </Text>
      <OrderedList>
        <ListItem>
          Адвокат може пояснити ваші права як потерпілого та допомогти вам їх
          реалізувати. Наприклад, ви можете мати право бути повідомленим про
          судові розгляди, бути присутніми на слуханнях і судах, робити заяву
          щодо впливу на потерпілого, вимагати відшкодування та шукати захисту
          від переслідувань або залякування з боку правопорушника або його
          спільників.
        </ListItem>
        <ListItem>
          Адвокат може допомогти вам у спілкуванні з правоохоронними органами,
          прокурорами, суддями та іншими фігурантами справи. Юрист також може
          допомогти вам отримати доступ до послуг підтримки, таких як
          консультації, медичне обслуговування, фінансова допомога та програми
          компенсації жертвам.
        </ListItem>
        <ListItem>
          Юрист може допомогти вам застосувати цивільні засоби правового захисту
          проти правопорушника чи інших відповідальних сторін. Ви можете подати
          позов про відшкодування збитків, таких як медичні витрати, втрачена
          зарплата. Цивільний позов також може служити способом притягнення
          правопорушника до відповідальності та запобігання майбутнім злочинам.
        </ListItem>
        <ListItem>
          Юрист може допомогти вам захистити вашу конфіденційність і безпеку.
          Юрист може порадити вам, як поводитися із запитами ЗМІ, публікаціями в
          соціальних мережах, запитами на публічні записи та іншими потенційними
          джерелами викриття чи переслідування. Адвокат також може допомогти вам
          отримати захисні або заборонні приписи, якщо це необхідно.
        </ListItem>
      </OrderedList>
      <br />
      <Text>
        Стати жертвою злочину може бути травматичним і приголомшливим. Але ви не
        повинні проходити через це поодинці. Адвокат може бути вашим союзником і
        захисником на вашому шляху до зцілення та одужання.
      </Text>
    </Box>
  );
};