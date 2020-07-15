import React from 'react';
import { MdRefresh, MdChat, MdMoreVert, MdSearch, MdDone, MdDoneAll, MdFace, MdKeyboardVoice } from 'react-icons/md';

import { Container, Menu, ProfileBar, SearchMenu, SearchBar, Contacts, Contact, ContactAvatar, ContactInfo, Hour, ContactName, PreviewMessage, MessageInfo, Chat, ChatInfo, MessageBar, Message } from './styles';

export default function Home() {
  return (
    <>
    <Container>
      <Menu>
        <ProfileBar>
          <div id="profile">
            <img src="https://api.adorable.io/avatars/40/abott@adorable.png" alt="Foto de perfil"/>
          </div>

          <MdRefresh size="24" color="#666" />
          <MdChat size="24" color="#666" />
          <MdMoreVert size="24" color="#666" />
        </ProfileBar>
        <SearchMenu>

          <SearchBar>
            <div id="search_button">
              <MdSearch size="19" color="#666" />
            </div>

            <div id="search_input">
              <input placeholder="Search or start new chat"/>
            </div>
          </SearchBar>

        </SearchMenu>
        <Contacts>

          <Contact>
            <ContactAvatar>
              <img src="https://static1.purepeople.com.br/articles/4/27/75/74/@/3153704-marilia-mendonca-escolheu-look-justo-ao-624x600-2.jpg" alt="Foto de perfil"/>
            </ContactAvatar>

            <MessageInfo>

              <ContactName>
                <span>Mairlia Mendonça</span>
              </ContactName>

              <Hour>
                <span>19:04</span>
              </Hour>

              <PreviewMessage>
                <span><MdDoneAll size="14" class="viewed" /> Lorem ipsum dolor sit amet.</span>
              </PreviewMessage>

            </MessageInfo>
          </Contact>

          <Contact>
            <ContactAvatar>
              <img src="https://www.biography.com/.image/t_share/MTE5NDg0MDU1MDE2MDgwOTEx/angelina-jolie-9356782-1-402.jpg" alt="Foto de perfil"/>
            </ContactAvatar>

            <MessageInfo>

              <ContactName>
                <span>Angelina Jolie</span>
              </ContactName>

              <Hour>
                  <span>18:59</span>
              </Hour>

              <PreviewMessage>
                <span><MdDoneAll size="14" /> Lorem ipsum dolor sit.</span>
              </PreviewMessage>

            </MessageInfo>
          </Contact>

          <Contact>
            <ContactAvatar>
              <img src="https://www.aceshowbiz.com/images/photo/cillian_murphy.jpg" alt="Foto de perfil"/>
            </ContactAvatar>

            <MessageInfo>

              <ContactName>
                <span>Cillian Murphy</span>
              </ContactName>

              <Hour>
                  <span>16:35</span>
              </Hour>

              <PreviewMessage>
                <span><MdDoneAll size="14" /> Lorem ipsum dolor sit amet, consectetur...</span>
              </PreviewMessage>

            </MessageInfo>
          </Contact>

          <Contact>
            <ContactAvatar>
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/2020-03-24_Pronunciamento_do_Presidente_da_Rep%C3%BAblica%2C_Jair_Bolsonaro_em_Rede_Nacional_de_R%C3%A1dio_e_Televis%C3%A3o_-_49695919452_%28cropped_2%29.jpg" alt="Foto de perfil"/>
            </ContactAvatar>

            <MessageInfo>

              <ContactName>
                <span>Jair Bolsonaro</span>
              </ContactName>

              <Hour>
                  <span>15:11</span>
              </Hour>

              <PreviewMessage>
                <span><MdDoneAll size="14" class="viewed" /> Lorem ipsum dolor.</span>
              </PreviewMessage>

            </MessageInfo>
          </Contact>

          <Contact>
            <ContactAvatar>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Brad_Pitt_Palm_Film_Festival.jpg/170px-Brad_Pitt_Palm_Film_Festival.jpg" alt="Foto de perfil"/>
            </ContactAvatar>

            <MessageInfo>

              <ContactName>
                <span>Brad Pitt</span>
              </ContactName>

              <Hour>
                  <span>15:01</span>
              </Hour>

              <PreviewMessage>
                <span><MdDone size="14" /> Lorem ipsum.</span>
              </PreviewMessage>

            </MessageInfo>
          </Contact>

          <Contact>
            <ContactAvatar>
              <img src="https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg" alt="Foto de perfil"/>
            </ContactAvatar>

            <MessageInfo>

              <ContactName>
                <span>Barack Obama</span>
              </ContactName>

              <Hour>
                  <span>14:26</span>
              </Hour>

              <PreviewMessage>
                <span><MdDoneAll size="14" class="viewed" /> Lorem ipsum dolor sit.</span>
              </PreviewMessage>

            </MessageInfo>
          </Contact>

          <Contact>
            <ContactAvatar>
              <img src="https://p16-va.tiktokcdn.com/img/musically-maliva-obj/e60ee02e5069760d57a40ddacd3f43ea~c5_720x720.jpeg" alt="Foto de perfil"/>
            </ContactAvatar>

            <MessageInfo>

              <ContactName>
                <span>Neymar Jr</span>
              </ContactName>

              <Hour>
                  <span>12:49</span>
              </Hour>

              <PreviewMessage>
                <span><MdDone size="14" /> Lorem ipsum dolor sit amet, consectetur.</span>
              </PreviewMessage>

            </MessageInfo>
          </Contact>

          <Contact>
            <ContactAvatar>
              <img src="https://i.guim.co.uk/img/media/4ee41da49a9126de99a97dace1fe3b8c2d476d69/71_118_3267_4082/master/3267.jpg?width=700&quality=85&auto=format&fit=max&s=f880b63a8e9b2dcbddcbd58fa9696e64" alt="Foto de perfil"/>
            </ContactAvatar>

            <MessageInfo>

              <ContactName>
                <span>Hillary Clinton</span>
              </ContactName>

              <Hour>
                  <span>10:55</span>
              </Hour>

              <PreviewMessage>
                <span><MdDoneAll size="14" /> Lorem ipsum dolor.</span>
              </PreviewMessage>

            </MessageInfo>
          </Contact>

          <Contact>
            <ContactAvatar>
              <img src="https://pbs.twimg.com/profile_images/1221272174142611458/T4ysDesk_400x400.jpg" alt="Foto de perfil"/>
            </ContactAvatar>

            <MessageInfo>

              <ContactName>
                <span>Nicole Bahls</span>
              </ContactName>

              <Hour>
                  <span>09:51</span>
              </Hour>

              <PreviewMessage>
                <span><MdDoneAll size="14" /> Lorem ipsum.</span>
              </PreviewMessage>

            </MessageInfo>
          </Contact>

        </Contacts>
      </Menu>

      <Chat>
        <ChatInfo>
          <img src="https://api.adorable.io/avatars/40/abott@adorable.png" alt="Foto de perfil"/>

          <ContactInfo>
            <p>Nome do contato</p>
            <span>online</span>
          </ContactInfo>

        </ChatInfo>
        <MessageBar>

          <Message>
            <MdFace size="28" color="#a0a0a0" />

            <input class="message_input" placeholder="Type a message"/>

            <div id="voice">
              <MdKeyboardVoice size="28" color="#a0a0a0" />
            </div>
          </Message>
        </MessageBar>
      </Chat>
    </Container>
    </>
  );
}
