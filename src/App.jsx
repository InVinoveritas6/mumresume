import * as Styled from "./App.styled";
import LinkendinSVG from "./svg/Linkendin";
import PhoneSVG from "./svg/Phone";
import EmailSVG from "./svg/Emai";

function App() {
  return (
    <Styled.AppBody>
      <Styled.AppBodyBlock>
        <Styled.List1>
          <Styled.List1Body>
            <Styled.List1Header>
              <Styled.List1HeaderTitle>
                <Styled.List1HeaderTitleName>
                  Наталья <br /> Лагодич
                </Styled.List1HeaderTitleName>
                <Styled.List1HeaderTitleProfession>
                  Заместитель директора по юридическим вопросам, <br />{" "}
                  заместитель директора, нач. юр.отдела, зам.директора
                </Styled.List1HeaderTitleProfession>
              </Styled.List1HeaderTitle>
              <Styled.List1HeaderAboutMe>
                <Styled.List1HeaderAboutMeTitle>
                  О себе
                </Styled.List1HeaderAboutMeTitle>
                <Styled.List1HeaderAboutMeText>
                  Я профессионально и четко выполняю свою работу, решаю
                  возникающие вопросы быстро, максимально полно и эффективно,
                  коммуникабельная, гибкая в общении, стрессоустойчивая,
                  ответственная, умение работать в многозадачном режиме
                </Styled.List1HeaderAboutMeText>
              </Styled.List1HeaderAboutMe>
              <Styled.List1HeaderPhotoBlock>
                <Styled.List1HeaderPhotoBorder>
                  <Styled.List1HeaderPhoto />
                </Styled.List1HeaderPhotoBorder>
              </Styled.List1HeaderPhotoBlock>
            </Styled.List1Header>
            <Styled.List1Info>
              <Styled.List1InfoEducation>
                <Styled.List1InfoEducationTitle>
                  Образование
                </Styled.List1InfoEducationTitle>
                <Styled.List1InfoEducationBlock>
                  <Styled.List1InfoEducationBlockTime>
                    Август 1994 - <br /> Январь 1999
                  </Styled.List1InfoEducationBlockTime>
                  <Styled.List1InfoEducationBlockTitle>
                    Белорусский государственный университет
                  </Styled.List1InfoEducationBlockTitle>
                  <Styled.List1InfoEducationBlockText>
                    Отслеживание изменений законодательства и внесение их в
                    литературу для студентов юр.факультета (ведомости, сборники
                    постановлений, вестник Верховного Суда и т.д.)
                  </Styled.List1InfoEducationBlockText>
                </Styled.List1InfoEducationBlock>
              </Styled.List1InfoEducation>
              <Styled.List1InfoSkills>
                <Styled.List1InfoSkillsTitle>
                  Навыки
                </Styled.List1InfoSkillsTitle>
                <Styled.List1InfoSkillsBlock>
                  Корпоративное и гражданское право европейских стран (Польша,
                  Чехия, Великобритания, Российская Федерация, Республика
                  Беларусь), Внешнеэкономическая деятельность, Претензионная
                  работа, Представительство в суде (Республика Беларусь),
                  Составление различных исковых заявлений, Юридическое и
                  документальное сопровождение, Международное право,
                  Международные контракты, Бизнес-корреспондент, Ведение
                  переговоров, Составление договоров, Организаторские
                  способности, Работа в команде, Грамотная речь, Деловое
                  общение, Заключение договоров, Работа с большим объем
                  информации, Управление командой, Международная
                  интеллектуальная собственность и бренды, Договорная поддержка
                  при разработке и закупке компьютерных программ.
                </Styled.List1InfoSkillsBlock>
              </Styled.List1InfoSkills>
              <Styled.List1InfoExperience>
                <Styled.List1InfoExperienceTitle>
                  Опыт работы
                </Styled.List1InfoExperienceTitle>
                <Styled.List1InfoExperienceBlock>
                  Общий опыт работы - 27 лет 9 месяцев <br /> Детальную
                  расшифровку вы можете найти <br /> на следующих страницах
                </Styled.List1InfoExperienceBlock>
              </Styled.List1InfoExperience>
              <Styled.List1InfoLanguage>
                <Styled.List1InfoLanguageTitle>
                  Языки
                </Styled.List1InfoLanguageTitle>
                <Styled.List1InfoLanguageBlock>
                  <li>English – B2 – Excellent</li>
                  <li>Spanish - A2 - Elementary</li>
                  <li>Italian - A2 - Elementary</li>
                  <li>German - A1 - Basic</li>
                </Styled.List1InfoLanguageBlock>
              </Styled.List1InfoLanguage>
            </Styled.List1Info>
          </Styled.List1Body>
          <Styled.List1InfoContacts>
            <Styled.List1InfoContactsTitle>
              Контакты
            </Styled.List1InfoContactsTitle>
            <Styled.List1InfoContactsBlock>
              <Styled.List1InfoContactsLink href="https://www.linkedin.com/in/alexander-lagodich-aa2726174/">
                <Styled.SVGIcon>
                  <LinkendinSVG />
                </Styled.SVGIcon>
                <Styled.TextLink>LinkedIn</Styled.TextLink>
                <Styled.TextLinkInfo>alexander-lagodich</Styled.TextLinkInfo>
              </Styled.List1InfoContactsLink>
              <Styled.List1InfoContactsLink href="mailto:n_lagodich@mail.ru">
                <Styled.SVGIcon>
                  <EmailSVG />
                </Styled.SVGIcon>
                <Styled.TextLink>Mail</Styled.TextLink>
                <Styled.TextLinkInfo>n_lagodich@mail.ru</Styled.TextLinkInfo>
              </Styled.List1InfoContactsLink>
              <Styled.List1InfoContactsLink href="tel:+375296405404">
                <Styled.SVGIcon>
                  <PhoneSVG />
                </Styled.SVGIcon>
                <Styled.TextLink>Phone</Styled.TextLink>
                <Styled.TextLinkInfo>+375(29)640-54-04</Styled.TextLinkInfo>
              </Styled.List1InfoContactsLink>
            </Styled.List1InfoContactsBlock>
          </Styled.List1InfoContacts>
        </Styled.List1>
        <Styled.List2>
          <Styled.List2Body>
            <Styled.List2Title>Опыт работы</Styled.List2Title>
            <Styled.List2ExperiencesBody>
              <Styled.List2ExperiencesBlock>
                <Styled.List2ExperiencesTime>
                  Май 2019 - настоящее время
                  <br /> 3 года 8 месяцев
                </Styled.List2ExperiencesTime>
                <Styled.List2ExperiencesTitle>
                  ООО "Т.Э.Л.С.-БиУай", ООО "КаргоТрансКонсалт""
                </Styled.List2ExperiencesTitle>
                <Styled.List2ExperiencesCitySite>
                  Минск /
                  <Styled.WebSite href="https://telsglobal.by/">
                    telsglobal.by
                  </Styled.WebSite>
                </Styled.List2ExperiencesCitySite>
                <Styled.List2ExperiencesSphere>
                  Перевозки, логистика, склад, ВЭД
                </Styled.List2ExperiencesSphere>
                <Styled.List2ExperiencesSubitle>
                  Заместитель директора по правовым вопросам
                </Styled.List2ExperiencesSubitle>
                <Styled.List2ExperiencesResponsibilities>
                  <li>
                    Автомобильные перевозки Управление многопрофильными активами
                  </li>
                  <li>
                  Управляющая компания группы, холдинга, штаб-квартира
Информационные технологии, системная интеграция, интернет

                  </li>
                  <li>Разработка программного обеспечения</li>
                  <li>
                  Системная интеграция,  автоматизации технологических и бизнес-процессов предприятия, ИТ-консалтинг
                  </li>
                  <li>Строительство, недвижимость, эксплуатация, проектирование: Управление и эксплуатация недвижимости</li>
                </Styled.List2ExperiencesResponsibilities>
                <Styled.List2ExperiencesInfo>
                Правовое сопровождение хозяйственной деятельности и корпоративные процедуры группы компаний TELS GLOBAL (13 юридических лиц), включая европейские офисы на территории Польши, РФ, Чехия, Великобритания, РБ, в т.ч. cделки с недвижимостью (купля-продажа, аренда), договора  по транспортной экспедиции между компаниями-партнерами, правовое сопровождение IT-направления (закупка ПО,  лицензионные договора, создание ПО), организация работы по регистрации и защите интеллектуальной собственности ГК на территории РБ и стран мира, ВЭД, трудовое право, обучение, займы, составление правовых заключений по запросам Администрации ГК различного характера, правовое сопровождение новых проектов, не связанных с транспортной экспедицией ГК
                </Styled.List2ExperiencesInfo>
              </Styled.List2ExperiencesBlock>
              <Styled.List2ExperiencesBlock>
                <Styled.List2ExperiencesTime>
                  Март 2008 — Апрель 2019
                  <br /> 11 лет 3 месяца
                </Styled.List2ExperiencesTime>
                <Styled.List2ExperiencesTitle>
                ООО «ВИТРУМ», ООО «Сладавита»
                </Styled.List2ExperiencesTitle>
                <Styled.List2ExperiencesCitySite>
                  Минск /
                  <Styled.WebSite href="https://vitrumplus.by/">
                    vitrumplus.by
                  </Styled.WebSite>
                </Styled.List2ExperiencesCitySite>
                <Styled.List2ExperiencesSphere>
                Перевозки, логистика, склад, ВЭД
                </Styled.List2ExperiencesSphere>
                <Styled.List2ExperiencesSubitle>
                Юрисконсульт, заместитель директора по юридическим вопросам
                </Styled.List2ExperiencesSubitle>
                <Styled.List2ExperiencesResponsibilities>
                  <li>Складские услуги</li>
                  <li>
                   Транспортно-логистические комплексы, порты (воздушный, водный, железнодорожный)
                  </li>
                  <li>Розничная торговля: Интернет-магазин</li>
                  <li>
                  Продукты питания: Хлебобулочные изделия (продвижение, оптовая торговля), Кондитерские изделия (продвижение, оптовая торговля)
                  </li>
                </Styled.List2ExperiencesResponsibilities>
                <Styled.List2ExperiencesInfo>
                Полное юридическое сопровождение группы компаний Витрум (7 юридических лиц): получение сертификата услуг собственного производства, кадровый учет, участие в разработке, дача заключения и документальное закрепление   всех направлений деятельности группы компаний (внешнеэкономическая деятельность, оптовая и розничная торговля, интернет-магазин, розничный торговый объект, транспортно-экспедиционная деятельность (в пределах РБ и СНГ, в т.ч. с привлечением нерезидентов), складская логистика, сопровождение сделок с недвижимостью (приобретение, продажа, аренда), разрешение конфликтных, досудебных ситуаций, возникающими со всеми категориями контрагентов группы компаний – Поставщики, перевозчики, работники, партнеры – документальное сопровождение, ответы на претензии. Разработка ВСЕХ категорий договоров в деятельности группы компаний, кадровый контроль группы компаний, корпоративные процедуры группы компаний, 
исковое, приказное, исполнительное производство, участие в судебных заседаниях

                </Styled.List2ExperiencesInfo>
              </Styled.List2ExperiencesBlock>
            </Styled.List2ExperiencesBody>
          </Styled.List2Body>
        </Styled.List2>
        <Styled.List2>
          <Styled.List2Body>
            <Styled.List2ExperiencesBody>
              <Styled.List2ExperiencesBlock>
                <Styled.List2ExperiencesTime>
                  Январь 2000 - Июнь 2007
                  <br /> 7 лет 6 месяцев
                </Styled.List2ExperiencesTime>
                <Styled.List2ExperiencesTitle>
                ООО "Акварио" - группа компаний Domus
                </Styled.List2ExperiencesTitle>
                <Styled.List2ExperiencesCitySite>
                  Минск
                </Styled.List2ExperiencesCitySite>
                <Styled.List2ExperiencesSphere>
                Розничная торговля
                </Styled.List2ExperiencesSphere>
                <Styled.List2ExperiencesSubitle>
                Юрисконсульт
                </Styled.List2ExperiencesSubitle>
                <Styled.List2ExperiencesResponsibilities>
                  <li>Розничная сеть (электроника, бытовая техника)</li>
                  <li>Розничная сеть (мебель)</li>
                  <li>
                  Товары народного потребления (непищевые): Мебель (продвижение, оптовая торговля)
                  </li>
                </Styled.List2ExperiencesResponsibilities>
                <Styled.List2ExperiencesInfo>
                Договорная работа, администрирование баз данных, переговоры с итальянским поставщиком, кадровый учет
                </Styled.List2ExperiencesInfo>
              </Styled.List2ExperiencesBlock>
              <Styled.List2ExperiencesBlock>
                <Styled.List2ExperiencesTime>
                  Февраль 1998 - Январь 2000
                  <br />2 года
                </Styled.List2ExperiencesTime>
                <Styled.List2ExperiencesTitle>
                ООО "Фрамин"
                </Styled.List2ExperiencesTitle>
                <Styled.List2ExperiencesCitySite>
                  Минск
                </Styled.List2ExperiencesCitySite>
                <Styled.List2ExperiencesSphere>
                Продукты питания
                </Styled.List2ExperiencesSphere>
                <Styled.List2ExperiencesSubitle>
                Юрисконсульт
                </Styled.List2ExperiencesSubitle>
                <Styled.List2ExperiencesResponsibilities>
                  <li>Безалкогольные напитки (производство)</li>
                  <li>Алкогольные напитки (продвижение, оптовая торговля)</li>
                </Styled.List2ExperiencesResponsibilities>
                <Styled.List2ExperiencesInfo>
                Договорная работа, кадровый учет, частично функции бухгалтера - платежи, командировки, ПУД, касса
                </Styled.List2ExperiencesInfo>
              </Styled.List2ExperiencesBlock>
            </Styled.List2ExperiencesBody>
          </Styled.List2Body>
        </Styled.List2>
      </Styled.AppBodyBlock>
    </Styled.AppBody>
  );
}

export default App;
