import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Shabad } from 'src/app/interfaces/shabad.interface';
import { HukamnamaService } from 'src/app/services/hukamnama.service';

type Translit = 'english' | 'en' | null;

@Component({
  standalone: true,
  selector: 'shabad-page',
  templateUrl: './shabad-page.component.html',
  styleUrls: ['./shabad-page.component.scss'],
  imports: [RouterModule, CommonModule],
})
export class ShabadPageComponent implements OnInit {
  private hukamnamaService = inject(HukamnamaService);
  private router = inject(Router);

  shabad: Shabad | null = null;

  temp: Shabad = {
    shabadInfo: {
      shabadId: 3993,
      shabadName: 47462,
      pageNo: 1110,
      source: {
        sourceId: 'G',
        gurmukhi: 'sRI gurU gRMQ swihb jI',
        unicode: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ',
        english: 'Sri Guru Granth Sahib Ji',
        pageNo: 1110,
      },
      raag: {
        raagId: 26,
        gurmukhi: 'rwgu quKwrI',
        unicode: 'ਰਾਗੁ ਤੁਖਾਰੀ',
        english: 'Raag Tukhaari',
        raagWithPage: 'Tukhaaree (1107-1117)',
      },
      writer: {
        writerId: 1,
        gurmukhi: 'mÚ 1',
        unicode: null,
        english: 'Guru Nanak Dev Ji',
      },
    },
    count: 25,
    navigation: {
      previous: 3992,
      next: 3994,
    },
    verses: [
      {
        verseId: 47461,
        shabadId: 3993,
        verse: {
          gurmukhi: 'quKwrI mhlw 1 ]',
          unicode: 'ਤੁਖਾਰੀ ਮਹਲਾ ੧ ॥',
        },
        larivaar: {
          gurmukhi: 'quKwrImhlw1]',
          unicode: 'ਤੁਖਾਰੀਮਹਲਾ੧॥',
        },
        translation: {
          en: {
            bdb: 'Tukhaari, First Mehla:',
            ms: 'Tukhari 1st Guru.',
            ssk: 'Tukhaari, First Mehl:',
          },
          pu: {
            ss: {
              gurmukhi: null,
              unicode: null,
            },
            ft: {
              gurmukhi: '',
              unicode: '',
            },
            bdb: {
              gurmukhi: null,
              unicode: null,
            },
            ms: {
              gurmukhi: 'quKwrI pihlI pwiqSwhI[',
              unicode: 'ਤੁਖਾਰੀ ਪਹਿਲੀ ਪਾਤਿਸ਼ਾਹੀ।',
            },
          },
          es: {
            sn: 'Tukhari, Mejl Guru Nanak, Primer Canal Divino.',
          },
          hi: {
            ss: '',
            sts: 'तुखारी महला १॥',
          },
        },
        transliteration: {
          english: 'tukhaaree mahalaa pehilaa ||',
          hindi: 'तुखारी महला १ ॥',
          en: 'tukhaaree mahalaa pehilaa ||',
          hi: 'तुखारी महला १ ॥',
          ipa: 't̪ʊkʰɑri məhəlɑ pəhɪlɑ.',
          ur: 'تُکھاریِ مهلا ۱ ۔۔',
        },
        pageNo: 1110,
        lineNo: 17,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [
            {
              p: 0,
              t: 'y',
            },
          ],
          igurbani: [
            {
              p: 0,
              t: 'y',
            },
          ],
          sttm2: [],
        },
      },
      {
        verseId: 47462,
        shabadId: 3993,
        verse: {
          gurmukhi: 'qwrw ciVAw lµmw ikau ndir inhwilAw rwm ]',
          unicode: 'ਤਾਰਾ ਚੜਿਆ ਲੰਮਾ ਕਿਉ ਨਦਰਿ ਨਿਹਾਲਿਆ ਰਾਮ ॥',
        },
        larivaar: {
          gurmukhi: 'qwrwciVAwlµmwikaundirinhwilAwrwm]',
          unicode: 'ਤਾਰਾਚੜਿਆਲੰਮਾਕਿਉਨਦਰਿਨਿਹਾਲਿਆਰਾਮ॥',
        },
        translation: {
          en: {
            bdb: 'The meteor shoots across the sky. How can it be seen with the eyes?',
            ms: 'The meteor has arisen. How can the Lord be seen with the eye?',
            ssk: 'The meteor shoots across the sky. How can it be seen with the eyes?',
          },
          pu: {
            ss: {
              gurmukhi:
                'hy BweI! ivAwpk-srUp prmwqmw (swry jgq ivc Awpxw) prkwS kr irhw hY [ pr aus ƒ A`KW nwl vyiKAw ikvyN jwey?',
              unicode:
                'ਹੇ ਭਾਈ! ਵਿਆਪਕ-ਸਰੂਪ ਪਰਮਾਤਮਾ (ਸਾਰੇ ਜਗਤ ਵਿਚ ਆਪਣਾ) ਪਰਕਾਸ਼ ਕਰ ਰਿਹਾ ਹੈ । ਪਰ ਉਸ ਨੂੰ ਅੱਖਾਂ ਨਾਲ ਵੇਖਿਆ ਕਿਵੇਂ ਜਾਏ?',
            },
            ft: {
              gurmukhi:
                '(rwm) prmwqmw rUpI qwrw lMmw ArQwq dys kwl vsqU ky pRCyd sy rihq (ciVAw) audq ho rhw hY[ so ndr kr ky kYsy (inhwilAw) dyKw jwvy?',
              unicode:
                '(ਰਾਮ) ਪਰਮਾਤਮਾ ਰੂਪੀ ਤਾਰਾ ਲੰਮਾ ਅਰਥਾਤ ਦੇਸ ਕਾਲ ਵਸਤੂ ਕੇ ਪ੍ਰਛੇਦ ਸੇ ਰਹਿਤ (ਚੜਿਆ) ਉਦਤ ਹੋ ਰਹਾ ਹੈ। ਸੋ ਨਦਰ ਕਰ ਕੇ ਕੈਸੇ (ਨਿਹਾਲਿਆ) ਦੇਖਾ ਜਾਵੇ?',
            },
            bdb: {
              gurmukhi:
                'hy BweI! ivAwpk-srUp prmwqmw (swry jgq ivc Awpxw) prkwS kr irhw hY [ pr aus ƒ A`KW nwl vyiKAw ikvyN jwey?',
              unicode:
                'ਹੇ ਭਾਈ! ਵਿਆਪਕ-ਸਰੂਪ ਪਰਮਾਤਮਾ (ਸਾਰੇ ਜਗਤ ਵਿਚ ਆਪਣਾ) ਪਰਕਾਸ਼ ਕਰ ਰਿਹਾ ਹੈ । ਪਰ ਉਸ ਨੂੰ ਅੱਖਾਂ ਨਾਲ ਵੇਖਿਆ ਕਿਵੇਂ ਜਾਏ?',
            },
            ms: {
              gurmukhi:
                'bodI vwlw qwrw cVH ipAw hY[ A`K nwl pRBU iks qrHW dyiKAw jw skdw hY?',
              unicode:
                'ਬੋਦੀ ਵਾਲਾ ਤਾਰਾ ਚੜ੍ਹ ਪਿਆ ਹੈ। ਅੱਖ ਨਾਲ ਪ੍ਰਭੂ ਕਿਸ ਤਰ੍ਹਾਂ ਦੇਖਿਆ ਜਾ ਸਕਦਾ ਹੈ?',
            },
          },
          es: {
            sn: 'Un Meteoro ha llegado al cielo de la mente, oh ¿cómo poder ver su Esplendor?',
          },
          hi: {
            ss: 'हे भाई ! व्यापक-स्वरूप परमात्मा (सारे जगत में अपना) प्रकाशस कर रहा है। पर उसे आँखों से कैसे देखा जाए।',
            sts: 'जिस पर परमेश्वर की कृपा-दृष्टि हो जाती है, उसके जीवन रूपी अंधेरे में ज्ञान का लम्बा तारा चढ़ा रहता है।',
          },
        },
        transliteration: {
          english: 'taaraa chaRiaa la(n)maa kiau nadhar nihaaliaa raam ||',
          hindi: 'तारा चड़िआ लंमा किउ नदरि निहालिआ राम ॥',
          en: 'taaraa chaRiaa la(n)maa kiau nadhar nihaaliaa raam ||',
          hi: 'तारा चड़िआ लंमा किउ नदरि निहालिआ राम ॥',
          ipa: 't̪ɑrɑ t͡ʃəɽɪəɑ ləⁿmɑ kɪo nəd̪ər nɪhɑlɪəɑ rɑm.',
          ur: 'تارا چڑآ لµما کا ندر نهالآ رام ۔۔',
        },
        pageNo: 1110,
        lineNo: 17,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [],
          igurbani: [],
          sttm2: [
            {
              p: 2,
              t: 'v',
            },
          ],
        },
      },
      {
        verseId: 47463,
        shabadId: 3993,
        verse: {
          gurmukhi: 'syvk pUr krMmw siqguir sbid idKwilAw rwm ]',
          unicode: 'ਸੇਵਕ ਪੂਰ ਕਰੰਮਾ ਸਤਿਗੁਰਿ ਸਬਦਿ ਦਿਖਾਲਿਆ ਰਾਮ ॥',
        },
        larivaar: {
          gurmukhi: 'syvkpUrkrMmwsiqguirsbididKwilAwrwm]',
          unicode: 'ਸੇਵਕਪੂਰਕਰੰਮਾਸਤਿਗੁਰਿਸਬਦਿਦਿਖਾਲਿਆਰਾਮ॥',
        },
        translation: {
          en: {
            bdb: 'The True Guru reveals the Word of the Shabad to His servant who has such perfect karma.',
            ms: 'The True Guru shows the Lord to the perfectly fortunate slave of his.',
            ssk: 'The True Guru reveals the Word of the Shabad to His servant who has such perfect karma.',
          },
          pu: {
            ss: {
              gurmukhi:
                'hy BweI! gurU ny Awpxy Sbd dI rwhIN (ijs ƒ) drsn krw id`qw, aus syvk dy pUry Bwg jwg pey [ ijs mnu`K ƒ gurU dy Sbd ny (srb-ivAwpk prmwqmw) ivKwl id`qw, auh sdw-iQr hir-nwm ƒ Awpxy ihrdy ivc vsw lYNdw hY [',
              unicode:
                'ਹੇ ਭਾਈ! ਗੁਰੂ ਨੇ ਆਪਣੇ ਸ਼ਬਦ ਦੀ ਰਾਹੀਂ (ਜਿਸ ਨੂੰ) ਦਰਸਨ ਕਰਾ ਦਿੱਤਾ, ਉਸ ਸੇਵਕ ਦੇ ਪੂਰੇ ਭਾਗ ਜਾਗ ਪਏ । ਜਿਸ ਮਨੁੱਖ ਨੂੰ ਗੁਰੂ ਦੇ ਸ਼ਬਦ ਨੇ (ਸਰਬ-ਵਿਆਪਕ ਪਰਮਾਤਮਾ) ਵਿਖਾਲ ਦਿੱਤਾ, ਉਹ ਸਦਾ-ਥਿਰ ਹਰਿ-ਨਾਮ ਨੂੰ ਆਪਣੇ ਹਿਰਦੇ ਵਿਚ ਵਸਾ ਲੈਂਦਾ ਹੈ ।',
            },
            ft: {
              gurmukhi:
                'jo pUry krmoN vwlw syvku hY, hy BweI! iqs ko siqguroN ny sbd dy kr idKwilAw hY]',
              unicode:
                'ਜੋ ਪੂਰੇ ਕਰਮੋਂ ਵਾਲਾ ਸੇਵਕੁ ਹੈ, ਹੇ ਭਾਈ! ਤਿਸ ਕੋ ਸਤਿਗੁਰੋਂ ਨੇ ਸਬਦ ਦੇ ਕਰ ਦਿਖਾਲਿਆ ਹੈ॥',
            },
            bdb: {
              gurmukhi:
                'hy BweI! gurU ny Awpxy Sbd dI rwhIN (ijs ƒ) drsn krw id`qw, aus syvk dy pUry Bwg jwg pey [ ijs mnu`K ƒ gurU dy Sbd ny (srb-ivAwpk prmwqmw) ivKwl id`qw, auh sdw-iQr hir-nwm ƒ Awpxy ihrdy ivc vsw lYNdw hY [',
              unicode:
                'ਹੇ ਭਾਈ! ਗੁਰੂ ਨੇ ਆਪਣੇ ਸ਼ਬਦ ਦੀ ਰਾਹੀਂ (ਜਿਸ ਨੂੰ) ਦਰਸਨ ਕਰਾ ਦਿੱਤਾ, ਉਸ ਸੇਵਕ ਦੇ ਪੂਰੇ ਭਾਗ ਜਾਗ ਪਏ । ਜਿਸ ਮਨੁੱਖ ਨੂੰ ਗੁਰੂ ਦੇ ਸ਼ਬਦ ਨੇ (ਸਰਬ-ਵਿਆਪਕ ਪਰਮਾਤਮਾ) ਵਿਖਾਲ ਦਿੱਤਾ, ਉਹ ਸਦਾ-ਥਿਰ ਹਰਿ-ਨਾਮ ਨੂੰ ਆਪਣੇ ਹਿਰਦੇ ਵਿਚ ਵਸਾ ਲੈਂਦਾ ਹੈ ।',
            },
            ms: {
              gurmukhi:
                's¤cy gurdyv jI Awpxy pUrn BwgW vwly goly ƒ pRBU ivKwl idMdy hn[',
              unicode:
                'ਸੱਚੇ ਗੁਰਦੇਵ ਜੀ ਆਪਣੇ ਪੂਰਨ ਭਾਗਾਂ ਵਾਲੇ ਗੋਲੇ ਨੂੰ ਪ੍ਰਭੂ ਵਿਖਾਲ ਦਿੰਦੇ ਹਨ।',
            },
          },
          es: {
            sn: 'El Verdadero Guru revela la Palabra del Shabd a Su Sirviente, quien tiene ese buen Karma.',
          },
          hi: {
            ss: 'हे भाई ! गुरू ने अपने शबद के द्वारा (जिसको) दर्शन करवा दिए। उस सेवक के पूरे भाग्य जाग उठे।',
            sts: 'पूर्ण भाग्यशाली सेवक को सतगुरु ने शब्द द्वारा ज्ञान का तारा दिखा दिया है।',
          },
        },
        transliteration: {
          english: 'sevak poor kara(n)maa satigur sabadh dhikhaaliaa raam ||',
          hindi: 'सेवक पूर करंमा सतिगुरि सबदि दिखालिआ राम ॥',
          en: 'sevak poor kara(n)maa satigur sabadh dhikhaaliaa raam ||',
          hi: 'सेवक पूर करंमा सतिगुरि सबदि दिखालिआ राम ॥',
          ipa: 'seʋək pur kərəŋmɑ sət̪ɪGʊr səbəd̪ d̪ɪkʰɑlɪəɑ rɑm.',
          ur: 'سےوک پُور کرںما ستگر سبد دکھالآ رام ۔۔',
        },
        pageNo: 1110,
        lineNo: 17,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [
            {
              p: 2,
              t: 'v',
            },
          ],
          igurbani: [
            {
              p: 2,
              t: 'v',
            },
          ],
          sttm2: [
            {
              p: 2,
              t: 'v',
            },
          ],
        },
      },
      {
        verseId: 47464,
        shabadId: 3993,
        verse: {
          gurmukhi: 'gur sbid idKwilAw scu smwilAw Aihinis dyiK bIcwirAw ]',
          unicode: 'ਗੁਰ ਸਬਦਿ ਦਿਖਾਲਿਆ ਸਚੁ ਸਮਾਲਿਆ ਅਹਿਨਿਸਿ ਦੇਖਿ ਬੀਚਾਰਿਆ ॥',
        },
        larivaar: {
          gurmukhi: 'gursbididKwilAwscusmwilAwAihinisdyiKbIcwirAw]',
          unicode: 'ਗੁਰਸਬਦਿਦਿਖਾਲਿਆਸਚੁਸਮਾਲਿਆਅਹਿਨਿਸਿਦੇਖਿਬੀਚਾਰਿਆ॥',
        },
        translation: {
          en: {
            bdb: 'The Guru reveals the Shabad; dwelling on the True Lord, day and night, he beholds and reflects on God.',
            ms: 'Whomsoever the Guru shows the Lord, he mediates on the True Name and day and night beholds and contemplates.',
            ssk: 'The Guru reveals the Shabad; dwelling on the True Lord, day and night, he beholds and reflects on God.',
          },
          pu: {
            ss: {
              gurmukhi:
                'aus dw drsn kr ky auh mnu`K idn rwq aus dy guxW ƒ Awpxy ic`q ivc vsWdw hY [',
              unicode:
                'ਉਸ ਦਾ ਦਰਸਨ ਕਰ ਕੇ ਉਹ ਮਨੁੱਖ ਦਿਨ ਰਾਤ ਉਸ ਦੇ ਗੁਣਾਂ ਨੂੰ ਆਪਣੇ ਚਿੱਤ ਵਿਚ ਵਸਾਂਦਾ ਹੈ ।',
            },
            ft: {
              gurmukhi:
                'ijs ko guroN ny sbd dy kr idKwXw hY, iqsI ny s`c ko smwlw hY AOr iqs ny rwiqR idn bIcwr kIAw qo dyK lIAw hY]',
              unicode:
                'ਜਿਸ ਕੋ ਗੁਰੋਂ ਨੇ ਸਬਦ ਦੇ ਕਰ ਦਿਖਾਯਾ ਹੈ, ਤਿਸੀ ਨੇ ਸੱਚ ਕੋ ਸਮਾਲਾ ਹੈ ਔਰ ਤਿਸ ਨੇ ਰਾਤ੍ਰਿ ਦਿਨ ਬੀਚਾਰ ਕੀਆ ਤੋ ਦੇਖ ਲੀਆ ਹੈ॥',
            },
            bdb: {
              gurmukhi:
                'aus dw drsn kr ky auh mnu`K idn rwq aus dy guxW ƒ Awpxy ic`q ivc vsWdw hY [',
              unicode:
                'ਉਸ ਦਾ ਦਰਸਨ ਕਰ ਕੇ ਉਹ ਮਨੁੱਖ ਦਿਨ ਰਾਤ ਉਸ ਦੇ ਗੁਣਾਂ ਨੂੰ ਆਪਣੇ ਚਿੱਤ ਵਿਚ ਵਸਾਂਦਾ ਹੈ ।',
            },
            ms: {
              gurmukhi:
                'ijs iksy ƒ gurU jI pRBU ƒ ivKwldy hn, auh s¤cy nwm dw ismrn krdw hY Aqy idn qy rwq vwihgurU ƒ vyKdw Aqy AwrwDdw hY[',
              unicode:
                'ਜਿਸ ਕਿਸੇ ਨੂੰ ਗੁਰੂ ਜੀ ਪ੍ਰਭੂ ਨੂੰ ਵਿਖਾਲਦੇ ਹਨ, ਉਹ ਸੱਚੇ ਨਾਮ ਦਾ ਸਿਮਰਨ ਕਰਦਾ ਹੈ ਅਤੇ ਦਿਨ ਤੇ ਰਾਤ ਵਾਹਿਗੁਰੂ ਨੂੰ ਵੇਖਦਾ ਅਤੇ ਆਰਾਧਦਾ ਹੈ।',
            },
          },
          es: {
            sn: 'El Guru revela el Shabd, habitando en el Señor Verdadero y, meditando día y noche, Lo ve siempre.',
          },
          hi: {
            ss: 'जिस मनुष्य को गुरू के शबद ने (सर्व-व्यापक परमात्मा) दिखा दिया। वह सदा-स्थिर हरी-नाम को अपने हृदय में बसा लेता है। उसके दर्शन करके वह मनुष्य दिन-रात उसके गुणों को अपने चिक्त में बसाता है।',
            sts: 'शब्द-गुरु ने ज्ञान का तारा दिखाया तो सत्य को स्मरण कर दिन-रात उसने उसका ही मनन किया।',
          },
        },
        transliteration: {
          english:
            'gur sabadh dhikhaaliaa sach samaaliaa ahinis dhekh beechaariaa ||',
          hindi: 'गुर सबदि दिखालिआ सचु समालिआ अहिनिसि देखि बीचारिआ ॥',
          en: 'gur sabadh dhikhaaliaa sach samaaliaa ahinis dhekh beechaariaa ||',
          hi: 'गुर सबदि दिखालिआ सचु समालिआ अहिनिसि देखि बीचारिआ ॥',
          ipa: 'Gʊr səbəd̪ d̪ɪkʰɑlɪəɑ sət͡ʃ səmɑlɪəɑ əhɪnɪs d̪ekʰ bit͡ʃɑrɪəɑ.',
          ur: 'گُر سبد دکھالآ سچ سمالآ اهٍنس دےکھ بیِچارآ ۔۔',
        },
        pageNo: 1110,
        lineNo: 18,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [
            {
              p: 4,
              t: 'v',
            },
            {
              p: 2,
              t: 'y',
            },
          ],
          igurbani: [
            {
              p: 4,
              t: 'v',
            },
            {
              p: 2,
              t: 'y',
            },
          ],
          sttm2: [
            {
              p: 4,
              t: 'v',
            },
          ],
        },
      },
      {
        verseId: 47465,
        shabadId: 3993,
        verse: {
          gurmukhi: 'Dwvq pMc rhy Gru jwixAw kwmu k®oDu ibKu mwirAw ]',
          unicode: 'ਧਾਵਤ ਪੰਚ ਰਹੇ ਘਰੁ ਜਾਣਿਆ ਕਾਮੁ ਕ੍ਰੋਧੁ ਬਿਖੁ ਮਾਰਿਆ ॥',
        },
        larivaar: {
          gurmukhi: 'DwvqpMcrhyGrujwixAwkwmuk®oDuibKumwirAw]',
          unicode: 'ਧਾਵਤਪੰਚਰਹੇਘਰੁਜਾਣਿਆਕਾਮੁਕ੍ਰੋਧੁਬਿਖੁਮਾਰਿਆ॥',
        },
        translation: {
          en: {
            bdb: 'The five restless desires are restrained, and he knows the home of his own heart. He conquers sexual desire, anger and corruption.',
            ms: "God His five outgoing organs are help, he knows the Lord's mansion and slays Lust, wrath and wickedness.",
            ssk: 'The five restless desires are restrained, and he knows the home of his own heart. He conquers sexual desire, anger and corruption.',
          },
          pu: {
            ss: {
              gurmukhi:
                'auh mnu`K (Awpxy Asl) Gr ƒ jwx lYNdw hY, aus dy pMjy igAwn-ieMd®y (ivkwrW vl) Btkx qoN ht jWdy hn, auh mnu`K Awqmk mOq ilAwaux vwly kwm ƒ ko®D ƒ mwr mukWdw hY [',
              unicode:
                'ਉਹ ਮਨੁੱਖ (ਆਪਣੇ ਅਸਲ) ਘਰ ਨੂੰ ਜਾਣ ਲੈਂਦਾ ਹੈ, ਉਸ ਦੇ ਪੰਜੇ ਗਿਆਨ-ਇੰਦ੍ਰੇ (ਵਿਕਾਰਾਂ ਵਲ) ਭਟਕਣ ਤੋਂ ਹਟ ਜਾਂਦੇ ਹਨ, ਉਹ ਮਨੁੱਖ ਆਤਮਕ ਮੌਤ ਲਿਆਉਣ ਵਾਲੇ ਕਾਮ ਨੂੰ ਕੋ੍ਰਧ ਨੂੰ ਮਾਰ ਮੁਕਾਂਦਾ ਹੈ ।',
            },
            ft: {
              gurmukhi:
                'jb Apnw (Gru) sÍrUp jwn lIAw qb pMc ieMdRX jo Dwvqy Qy, so Apny Apny ivsÎ sy ht rhy hYN AO kwm, kRoDwid ibK rUp ibkwroN ko BI mwr dIAw hY]',
              unicode:
                'ਜਬ ਅਪਨਾ (ਘਰੁ) ਸ੍ਵਰੂਪ ਜਾਨ ਲੀਆ ਤਬ ਪੰਚ ਇੰਦ੍ਰਯ ਜੋ ਧਾਵਤੇ ਥੇ, ਸੋ ਅਪਨੇ ਅਪਨੇ ਵਿਸ੍ਯ ਸੇ ਹਟ ਰਹੇ ਹੈਂ ਔ ਕਾਮ, ਕ੍ਰੋਧਾਦਿ ਬਿਖ ਰੂਪ ਬਿਕਾਰੋਂ ਕੋ ਭੀ ਮਾਰ ਦੀਆ ਹੈ॥',
            },
            bdb: {
              gurmukhi:
                'auh mnu`K (Awpxy Asl) Gr ƒ jwx lYNdw hY, aus dy pMjy igAwn-ieMd®y (ivkwrW vl) Btkx qoN ht jWdy hn, auh mnu`K Awqmk mOq ilAwaux vwly kwm ƒ ko®D ƒ mwr mukWdw hY [',
              unicode:
                'ਉਹ ਮਨੁੱਖ (ਆਪਣੇ ਅਸਲ) ਘਰ ਨੂੰ ਜਾਣ ਲੈਂਦਾ ਹੈ, ਉਸ ਦੇ ਪੰਜੇ ਗਿਆਨ-ਇੰਦ੍ਰੇ (ਵਿਕਾਰਾਂ ਵਲ) ਭਟਕਣ ਤੋਂ ਹਟ ਜਾਂਦੇ ਹਨ, ਉਹ ਮਨੁੱਖ ਆਤਮਕ ਮੌਤ ਲਿਆਉਣ ਵਾਲੇ ਕਾਮ ਨੂੰ ਕੋ੍ਰਧ ਨੂੰ ਮਾਰ ਮੁਕਾਂਦਾ ਹੈ ।',
            },
            ms: {
              gurmukhi:
                'aus dIAW B`jIAW iPrdIAW pMjy iedRIAW siQr ho jWdIAW hn, auh suAwmI dy mMdr ƒ jwx lYNdw hY Aqy kwmcyStw, gu¤sy Aqy bdI ƒ mwr su`tdw hY[',
              unicode:
                'ਉਸ ਦੀਆਂ ਭੱਜੀਆਂ ਫਿਰਦੀਆਂ ਪੰਜੇ ਇਦ੍ਰੀਆਂ ਸਥਿਰ ਹੋ ਜਾਂਦੀਆਂ ਹਨ, ਉਹ ਸੁਆਮੀ ਦੇ ਮੰਦਰ ਨੂੰ ਜਾਣ ਲੈਂਦਾ ਹੈ ਅਤੇ ਕਾਮਚੇਸ਼ਟਾ, ਗੁੱਸੇ ਅਤੇ ਬਦੀ ਨੂੰ ਮਾਰ ਸੁੱਟਦਾ ਹੈ।',
            },
          },
          es: {
            sn: 'Las cinco facultades indomables son controladas y así uno conoce su Ser, triunfando sobre la lujuria, la ira y la corrupción. ',
          },
          hi: {
            ss: 'वह मनुष्य (अपने असल) घर को जान लेता है। उसकी पाँचों-ज्ञानेन्द्रियां (विकारों की तरफ) भटकने से हट जाती हैं। वह मनुष्य आत्मिक मौत लाने वाले काम को क्रोध को समाप्त कर देता है।',
            sts: 'उसके हृदय-घर में से पाँच विकारों का छुटकारा हो गया और काम-क्रोध रूपी विष का अंत हो गया।',
          },
        },
        transliteration: {
          english:
            'dhaavat pa(n)ch rahe ghar jaaniaa kaam karodh bikh maariaa ||',
          hindi: 'धावत पंच रहे घरु जाणिआ कामु क्रोधु बिखु मारिआ ॥',
          en: 'dhaavat pa(n)ch rahe ghar jaaniaa kaam karodh bikh maariaa ||',
          hi: 'धावत पंच रहे घरु जाणिआ कामु क्रोधु बिखु मारिआ ॥',
          ipa: 't̪ɑʋət̪ pəŋt͡ʃ rəhe Gʰər d͡ʒɑɳɪəɑ kɑm kəʳɔt̪ bɪkʰ mɑrɪəɑ.',
          ur: 'دھاوت پںچ رهے گھر جاݨآ کام ک®ودھ بکھ مارآ ۔۔',
        },
        pageNo: 1110,
        lineNo: 19,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [],
          igurbani: [],
          sttm2: [
            {
              p: 4,
              t: 'v',
            },
          ],
        },
      },
      {
        verseId: 47466,
        shabadId: 3993,
        verse: {
          gurmukhi: 'AMqir joiq BeI gur swKI cIny rwm krMmw ]',
          unicode: 'ਅੰਤਰਿ ਜੋਤਿ ਭਈ ਗੁਰ ਸਾਖੀ ਚੀਨੇ ਰਾਮ ਕਰੰਮਾ ॥',
        },
        larivaar: {
          gurmukhi: 'AMqirjoiqBeIgurswKIcInyrwmkrMmw]',
          unicode: 'ਅੰਤਰਿਜੋਤਿਭਈਗੁਰਸਾਖੀਚੀਨੇਰਾਮਕਰੰਮਾ॥',
        },
        translation: {
          en: {
            bdb: "His inner being is illuminated, by the Guru's Teachings; He beholds the Lord's play of karma.",
            ms: "His within is illumined by the Guru's instruction and he sees the Lord's wondrous plays.",
            ssk: "His inner being is illuminated, by the Guru's Teachings; He beholds the Lord's play of karma.",
          },
          pu: {
            ss: {
              gurmukhi:
                'hy BweI! gurU dy aupdyS dI brkiq nwl aus mnu`K dy AMdr r`bI joiq prgt ho jWdI hY (jo kuJ jgq ivc ho irhw hY, aus ƒ) auh prmwqmw dy kOqk (jwx ky) vyKdw hY [',
              unicode:
                'ਹੇ ਭਾਈ! ਗੁਰੂ ਦੇ ਉਪਦੇਸ਼ ਦੀ ਬਰਕਤਿ ਨਾਲ ਉਸ ਮਨੁੱਖ ਦੇ ਅੰਦਰ ਰੱਬੀ ਜੋਤਿ ਪਰਗਟ ਹੋ ਜਾਂਦੀ ਹੈ (ਜੋ ਕੁਝ ਜਗਤ ਵਿਚ ਹੋ ਰਿਹਾ ਹੈ, ਉਸ ਨੂੰ) ਉਹ ਪਰਮਾਤਮਾ ਦੇ ਕੌਤਕ (ਜਾਣ ਕੇ) ਵੇਖਦਾ ਹੈ ।',
            },
            ft: {
              gurmukhi:
                'gur isKÎw kr irdy ky AMqir joqI kI (joiq) gÎwq BeI hY AOr bfy krmoN kr rwm jI (cIny) jwxy hYN]',
              unicode:
                'ਗੁਰ ਸਿਖ੍ਯਾ ਕਰ ਰਿਦੇ ਕੇ ਅੰਤਰਿ ਜੋਤੀ ਕੀ (ਜੋਤਿ) ਗ੍ਯਾਤ ਭਈ ਹੈ ਔਰ ਬਡੇ ਕਰਮੋਂ ਕਰ ਰਾਮ ਜੀ (ਚੀਨੇ) ਜਾਣੇ ਹੈਂ॥',
            },
            bdb: {
              gurmukhi:
                'hy BweI! gurU dy aupdyS dI brkiq nwl aus mnu`K dy AMdr r`bI joiq prgt ho jWdI hY (jo kuJ jgq ivc ho irhw hY, aus ƒ) auh prmwqmw dy kOqk (jwx ky) vyKdw hY [',
              unicode:
                'ਹੇ ਭਾਈ! ਗੁਰੂ ਦੇ ਉਪਦੇਸ਼ ਦੀ ਬਰਕਤਿ ਨਾਲ ਉਸ ਮਨੁੱਖ ਦੇ ਅੰਦਰ ਰੱਬੀ ਜੋਤਿ ਪਰਗਟ ਹੋ ਜਾਂਦੀ ਹੈ (ਜੋ ਕੁਝ ਜਗਤ ਵਿਚ ਹੋ ਰਿਹਾ ਹੈ, ਉਸ ਨੂੰ) ਉਹ ਪਰਮਾਤਮਾ ਦੇ ਕੌਤਕ (ਜਾਣ ਕੇ) ਵੇਖਦਾ ਹੈ ।',
            },
            ms: {
              gurmukhi:
                'gurW dy aUpdyS duAwrw, aus dw AMdr rOSn ho jWdw hY Aqy auh swihb dIAW AduBuq KyfW ƒ vyKdw hY[',
              unicode:
                'ਗੁਰਾਂ ਦੇ ਊਪਦੇਸ਼ ਦੁਆਰਾ, ਉਸ ਦਾ ਅੰਦਰ ਰੌਸ਼ਨ ਹੋ ਜਾਂਦਾ ਹੈ ਅਤੇ ਉਹ ਸਾਹਿਬ ਦੀਆਂ ਅਦੁਭੁਤ ਖੇਡਾਂ ਨੂੰ ਵੇਖਦਾ ਹੈ।',
            },
          },
          es: {
            sn: 'El interior de uno es iluminado a través de la Sabiduría del Guru, y logra ver el Juego del Karma del Señor. ',
          },
          hi: {
            ss: 'हे भाई ! गुरू के उपदेश की बरकति से उस मनुष्य के अंदर रॅबी ज्योति प्रकट हो जाती है (जो कुछ जगत में हो रहा है। उसको) वह परमात्मा के करिश्में (समझ के) देखता है।',
            sts: 'गुरु की शिक्षा से अन्तर्मन में सत्य की ज्योति प्रज्वलित हो गई और उसने प्रभु की लीला को पहचान लिया।',
          },
        },
        transliteration: {
          english: 'a(n)tar jot bhiee gur saakhee cheene raam kara(n)maa ||',
          hindi: 'अंतरि जोति भई गुर साखी चीने राम करंमा ॥',
          en: 'a(n)tar jot bhiee gur saakhee cheene raam kara(n)maa ||',
          hi: 'अंतरि जोति भई गुर साखी चीने राम करंमा ॥',
          ipa: 'əŋt̪ər d͡ʒɔt̪ ɓei Gʊr sɑkʰi t͡ʃine rɑm kərəŋmɑ.',
          ur: 'اںتر جوت بھای گُر ساکھیِ چیٍنے رام کرںما ۔۔',
        },
        pageNo: 1110,
        lineNo: 19,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [
            {
              p: 4,
              t: 'v',
            },
            {
              p: 2,
              t: 'y',
            },
          ],
          igurbani: [
            {
              p: 4,
              t: 'v',
            },
            {
              p: 2,
              t: 'y',
            },
          ],
          sttm2: [
            {
              p: 4,
              t: 'v',
            },
          ],
        },
      },
      {
        verseId: 47467,
        shabadId: 3993,
        verse: {
          gurmukhi: 'nwnk haumY mwir pqIxy qwrw ciVAw lµmw ]1]',
          unicode: 'ਨਾਨਕ ਹਉਮੈ ਮਾਰਿ ਪਤੀਣੇ ਤਾਰਾ ਚੜਿਆ ਲੰਮਾ ॥੧॥',
        },
        larivaar: {
          gurmukhi: 'nwnkhaumYmwirpqIxyqwrwciVAwlµmw]1]',
          unicode: 'ਨਾਨਕਹਉਮੈਮਾਰਿਪਤੀਣੇਤਾਰਾਚੜਿਆਲੰਮਾ॥੧॥',
        },
        translation: {
          en: {
            bdb: 'O Nanak, killing his ego, he is satisfied; the meteor has shot across the sky. ||1||',
            ms: 'Nanak, slaying his ego he is propitiated. Lo, the trailing star has arisen.',
            ssk: 'O Nanak, killing his ego, he is satisfied; the meteor has shot across the sky. ||1||',
          },
          pu: {
            ss: {
              gurmukhi:
                'hy nwnk! (ijnHW mnu`KW dy AMdr) srb-ivAwpk pRBU dI joiq jg pYNdI hY, auh (Awpxy AMdroN) haumY ƒ mwr ky (prmwqmw dy crnW ivc) sdw itky rihMdy hn [1[',
              unicode:
                'ਹੇ ਨਾਨਕ! (ਜਿਨ੍ਹਾਂ ਮਨੁੱਖਾਂ ਦੇ ਅੰਦਰ) ਸਰਬ-ਵਿਆਪਕ ਪ੍ਰਭੂ ਦੀ ਜੋਤਿ ਜਗ ਪੈਂਦੀ ਹੈ, ਉਹ (ਆਪਣੇ ਅੰਦਰੋਂ) ਹਉਮੈ ਨੂੰ ਮਾਰ ਕੇ (ਪਰਮਾਤਮਾ ਦੇ ਚਰਨਾਂ ਵਿਚ) ਸਦਾ ਟਿਕੇ ਰਹਿੰਦੇ ਹਨ ।੧।',
            },
            ft: {
              gurmukhi:
                'sRI gurU jI khqy hYN: hMqw mmqw ko mwr kr jo lMmw qwrw cVw hUAw hY iqs myN pqIAwey hYN, Bwv prmwqmw ko inscy kIAw hY]1]',
              unicode:
                'ਸ੍ਰੀ ਗੁਰੂ ਜੀ ਕਹਤੇ ਹੈਂ: ਹੰਤਾ ਮਮਤਾ ਕੋ ਮਾਰ ਕਰ ਜੋ ਲੰਮਾ ਤਾਰਾ ਚੜਾ ਹੂਆ ਹੈ ਤਿਸ ਮੇਂ ਪਤੀਆਏ ਹੈਂ, ਭਾਵ ਪਰਮਾਤਮਾ ਕੋ ਨਿਸਚੇ ਕੀਆ ਹੈ॥੧॥',
            },
            bdb: {
              gurmukhi:
                'hy nwnk! (ijnHW mnu`KW dy AMdr) srb-ivAwpk pRBU dI joiq jg pYNdI hY, auh (Awpxy AMdroN) haumY ƒ mwr ky (prmwqmw dy crnW ivc) sdw itky rihMdy hn [1[',
              unicode:
                'ਹੇ ਨਾਨਕ! (ਜਿਨ੍ਹਾਂ ਮਨੁੱਖਾਂ ਦੇ ਅੰਦਰ) ਸਰਬ-ਵਿਆਪਕ ਪ੍ਰਭੂ ਦੀ ਜੋਤਿ ਜਗ ਪੈਂਦੀ ਹੈ, ਉਹ (ਆਪਣੇ ਅੰਦਰੋਂ) ਹਉਮੈ ਨੂੰ ਮਾਰ ਕੇ (ਪਰਮਾਤਮਾ ਦੇ ਚਰਨਾਂ ਵਿਚ) ਸਦਾ ਟਿਕੇ ਰਹਿੰਦੇ ਹਨ ।੧।',
            },
            ms: {
              gurmukhi:
                'nwnk, AwpxI hMgqw ƒ mwr ky auh sMquSt ho jWdw hY[ dyKo, bodI vwlw qwrw cVH igAw hY[',
              unicode:
                'ਨਾਨਕ, ਆਪਣੀ ਹੰਗਤਾ ਨੂੰ ਮਾਰ ਕੇ ਉਹ ਸੰਤੁਸ਼ਟ ਹੋ ਜਾਂਦਾ ਹੈ। ਦੇਖੋ, ਬੋਦੀ ਵਾਲਾ ਤਾਰਾ ਚੜ੍ਹ ਗਿਆ ਹੈ।',
            },
          },
          es: {
            sn: 'Dice Nanak, destruyendo el ego negativo, uno entra en el Contentamiento y mira, la mente se ilumina con el Esplendor del Meteoro. (1) ',
          },
          hi: {
            ss: 'हे नानक ! (जिन मनुष्यों के अंदर) सर्व-व्यापक प्रभू की ज्योति जग उठती है। वह (अपने अंदर से) अहंकार को मार के (परमात्मा के चरणों में) सदा टिके रहते हैं। 1।',
            sts: 'गुरु साहिब फुरमाते हैं कि जो अहम् को मिटाकर प्रसन्न हो जाता है, उसके लिए लम्बा तारा चढ़ा रहता है।॥१॥',
          },
        },
        transliteration: {
          english: 'naanak haumai maar pateene taaraa chaRiaa la(n)maa ||1||',
          hindi: 'नानक हउमै मारि पतीणे तारा चड़िआ लंमा ॥१॥',
          en: 'naanak haumai maar pateene taaraa chaRiaa la(n)maa ||1||',
          hi: 'नानक हउमै मारि पतीणे तारा चड़िआ लंमा ॥१॥',
          ipa: 'nɑnək hoʊmæ mɑr pət̪iɳe t̪ɑrɑ t͡ʃəɽɪəɑ ləⁿmɑ.1.',
          ur: 'نانک هامَے مار پتیِݨے تارا چڑآ لµما ۔۔۱۔۔',
        },
        pageNo: 1111,
        lineNo: 1,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [],
          igurbani: [],
          sttm2: [
            {
              p: 0,
              t: 'v',
            },
            {
              p: 3,
              t: 'v',
            },
          ],
        },
      },
      {
        verseId: 47468,
        shabadId: 3993,
        verse: {
          gurmukhi: 'gurmuiK jwig rhy cUkI AiBmwnI rwm ]',
          unicode: 'ਗੁਰਮੁਖਿ ਜਾਗਿ ਰਹੇ ਚੂਕੀ ਅਭਿਮਾਨੀ ਰਾਮ ॥',
        },
        larivaar: {
          gurmukhi: 'gurmuiKjwigrhycUkIAiBmwnIrwm]',
          unicode: 'ਗੁਰਮੁਖਿਜਾਗਿਰਹੇਚੂਕੀਅਭਿਮਾਨੀਰਾਮ॥',
        },
        translation: {
          en: {
            bdb: 'The Gurmukhs remain awake and aware; their egotistical pride is eradicated.',
            ms: 'The Guru-wards remain awake. The self-conceit is annulled.',
            ssk: 'The Gurmukhs remain awake and aware; their egotistical pride is eradicated.',
          },
          pu: {
            ss: {
              gurmukhi:
                'hy BweI! gurU dy snmuK rihx vwly mnu`K (mwieAw dy h`ilAW v`loN) sucyq rihMdy hn, (auhnW dy AMdroN) AhMkwr vwlI dSw mu`k jWdI hY [',
              unicode:
                'ਹੇ ਭਾਈ! ਗੁਰੂ ਦੇ ਸਨਮੁਖ ਰਹਿਣ ਵਾਲੇ ਮਨੁੱਖ (ਮਾਇਆ ਦੇ ਹੱਲਿਆਂ ਵੱਲੋਂ) ਸੁਚੇਤ ਰਹਿੰਦੇ ਹਨ, (ਉਹਨਾਂ ਦੇ ਅੰਦਰੋਂ) ਅਹੰਕਾਰ ਵਾਲੀ ਦਸ਼ਾ ਮੁੱਕ ਜਾਂਦੀ ਹੈ ।',
            },
            ft: {
              gurmukhi:
                'gurmuK rwm Bjn myN (jwig) swvDwn ho rhy hYN Ar iqn kI (AiBmwnI) hMqw cUkI inbRq ho geI hY]',
              unicode:
                'ਗੁਰਮੁਖ ਰਾਮ ਭਜਨ ਮੇਂ (ਜਾਗਿ) ਸਾਵਧਾਨ ਹੋ ਰਹੇ ਹੈਂ ਅਰ ਤਿਨ ਕੀ (ਅਭਿਮਾਨੀ) ਹੰਤਾ ਚੂਕੀ ਨਿਬ੍ਰਤ ਹੋ ਗਈ ਹੈ॥',
            },
            bdb: {
              gurmukhi:
                'hy BweI! gurU dy snmuK rihx vwly mnu`K (mwieAw dy h`ilAW v`loN) sucyq rihMdy hn, (auhnW dy AMdroN) AhMkwr vwlI dSw mu`k jWdI hY [',
              unicode:
                'ਹੇ ਭਾਈ! ਗੁਰੂ ਦੇ ਸਨਮੁਖ ਰਹਿਣ ਵਾਲੇ ਮਨੁੱਖ (ਮਾਇਆ ਦੇ ਹੱਲਿਆਂ ਵੱਲੋਂ) ਸੁਚੇਤ ਰਹਿੰਦੇ ਹਨ, (ਉਹਨਾਂ ਦੇ ਅੰਦਰੋਂ) ਅਹੰਕਾਰ ਵਾਲੀ ਦਸ਼ਾ ਮੁੱਕ ਜਾਂਦੀ ਹੈ ।',
            },
            ms: {
              gurmukhi:
                'gurU-AnuswrI jwgdy rihMdy hn[ aunHW dI svY-hMgqw imt jWdI hY[',
              unicode:
                'ਗੁਰੂ-ਅਨੁਸਾਰੀ ਜਾਗਦੇ ਰਹਿੰਦੇ ਹਨ। ਉਨ੍ਹਾਂ ਦੀ ਸਵੈ-ਹੰਗਤਾ ਮਿਟ ਜਾਂਦੀ ਹੈ।',
            },
          },
          es: {
            sn: 'El Gurmukj permanece despierto hacia Él, pues se ha liberado de su ego. ',
          },
          hi: {
            ss: 'हे भाई ! गुरू के सन्मुख रहने वाले मनुष्य (माया के हमलों की ओर से) सचेत रहते हैं। (उनके अंदर से) अहंकार वाली दशा समाप्त हो जाती है।',
            sts: 'गुरुमुख अभिमान को मिटाकर जाग्रत रहते हैं।',
          },
        },
        transliteration: {
          english: 'gurmukh jaag rahe chookee abhimaanee raam ||',
          hindi: 'गुरमुखि जागि रहे चूकी अभिमानी राम ॥',
          en: 'gurmukh jaag rahe chookee abhimaanee raam ||',
          hi: 'गुरमुखि जागि रहे चूकी अभिमानी राम ॥',
          ipa: 'Gʊrəmʊkʰ d͡ʒɑG rəhe t͡ʃuki əɓɪmɑni rɑm.',
          ur: 'گُرمکھ جاگ رهے چُوکیِ ابھمانیِ رام ۔۔',
        },
        pageNo: 1111,
        lineNo: 1,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [
            {
              p: 2,
              t: 'v',
            },
            {
              p: 4,
              t: 'y',
            },
          ],
          igurbani: [
            {
              p: 2,
              t: 'v',
            },
            {
              p: 4,
              t: 'y',
            },
          ],
          sttm2: [
            {
              p: 2,
              t: 'v',
            },
          ],
        },
      },
      {
        verseId: 47469,
        shabadId: 3993,
        verse: {
          gurmukhi: 'Anidnu Boru BieAw swic smwnI rwm ]',
          unicode: 'ਅਨਦਿਨੁ ਭੋਰੁ ਭਇਆ ਸਾਚਿ ਸਮਾਨੀ ਰਾਮ ॥',
        },
        larivaar: {
          gurmukhi: 'AnidnuBoruBieAwswicsmwnIrwm]',
          unicode: 'ਅਨਦਿਨੁਭੋਰੁਭਇਆਸਾਚਿਸਮਾਨੀਰਾਮ॥',
        },
        translation: {
          en: {
            bdb: 'Night and day, it is dawn for them; they merge in the True Lord.',
            ms: 'They are ever blessed with the dawn of wisdom and merge in the True Name.',
            ssk: 'Night and day, it is dawn for them; they merge in the True Lord.',
          },
          pu: {
            ss: {
              gurmukhi:
                '(auhnW dy AMdr) hr vyly Awqmk jIvn dI sUJ dw cwnx hoieAw rihMdw hY, (auhnW dI suriq) sdw kwiem rihx vwly prmwqmw ivc itkI rihMdI hY [',
              unicode:
                '(ਉਹਨਾਂ ਦੇ ਅੰਦਰ) ਹਰ ਵੇਲੇ ਆਤਮਕ ਜੀਵਨ ਦੀ ਸੂਝ ਦਾ ਚਾਨਣ ਹੋਇਆ ਰਹਿੰਦਾ ਹੈ, (ਉਹਨਾਂ ਦੀ ਸੁਰਤਿ) ਸਦਾ ਕਾਇਮ ਰਹਿਣ ਵਾਲੇ ਪਰਮਾਤਮਾ ਵਿਚ ਟਿਕੀ ਰਹਿੰਦੀ ਹੈ ।',
            },
            ft: {
              gurmukhi:
                '(Anidnu) inrMqir gÎwn rUp (Boru) idn hUAw hY, swc rUp rwm ivKy iqn kI buDI smweI hY]',
              unicode:
                '(ਅਨਦਿਨੁ) ਨਿਰੰਤਰਿ ਗ੍ਯਾਨ ਰੂਪ (ਭੋਰੁ) ਦਿਨ ਹੂਆ ਹੈ, ਸਾਚ ਰੂਪ ਰਾਮ ਵਿਖੇ ਤਿਨ ਕੀ ਬੁਧੀ ਸਮਾਈ ਹੈ॥',
            },
            bdb: {
              gurmukhi:
                '(auhnW dy AMdr) hr vyly Awqmk jIvn dI sUJ dw cwnx hoieAw rihMdw hY, (auhnW dI suriq) sdw kwiem rihx vwly prmwqmw ivc itkI rihMdI hY [',
              unicode:
                '(ਉਹਨਾਂ ਦੇ ਅੰਦਰ) ਹਰ ਵੇਲੇ ਆਤਮਕ ਜੀਵਨ ਦੀ ਸੂਝ ਦਾ ਚਾਨਣ ਹੋਇਆ ਰਹਿੰਦਾ ਹੈ, (ਉਹਨਾਂ ਦੀ ਸੁਰਤਿ) ਸਦਾ ਕਾਇਮ ਰਹਿਣ ਵਾਲੇ ਪਰਮਾਤਮਾ ਵਿਚ ਟਿਕੀ ਰਹਿੰਦੀ ਹੈ ।',
            },
            ms: {
              gurmukhi:
                'aunHW ƒ sdw hI dwnweI dy phuPutwly dI dwq imldI hY Aqy auh s¤cy nwm AMdr lIn ho jWdy hn[',
              unicode:
                'ਉਨ੍ਹਾਂ ਨੂੰ ਸਦਾ ਹੀ ਦਾਨਾਈ ਦੇ ਪਹੁਫੁਟਾਲੇ ਦੀ ਦਾਤ ਮਿਲਦੀ ਹੈ ਅਤੇ ਉਹ ਸੱਚੇ ਨਾਮ ਅੰਦਰ ਲੀਨ ਹੋ ਜਾਂਦੇ ਹਨ।',
            },
          },
          es: {
            sn: 'Él se regocija en el esplendor del amanecer, inmergiéndose en el Uno Verdadero.',
          },
          hi: {
            ss: '(उनके अंदर) हर वक्त आत्मिक जीवन की सूझ की रौशनी बनी रहती है। (उनकी सुरति) सदा कायम रहने वाले परमात्मा में टिकी रहती है।',
            sts: 'उनके लिए सत्य का सवेरा बना रहता है और वे परम सत्य प्रभु में विलीन रहते हैं।',
          },
        },
        transliteration: {
          english: 'anadhin bhor bhiaa saach samaanee raam ||',
          hindi: 'अनदिनु भोरु भइआ साचि समानी राम ॥',
          en: 'anadhin bhor bhiaa saach samaanee raam ||',
          hi: 'अनदिनु भोरु भइआ साचि समानी राम ॥',
          ipa: 'ənəd̪ɪn ɓɔr ɓɪɑ sɑt͡ʃ səmɑni rɑm.',
          ur: 'اندن بھور بھایا ساچ سمانیِ رام ۔۔',
        },
        pageNo: 1111,
        lineNo: 1,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [
            {
              p: 2,
              t: 'v',
            },
          ],
          igurbani: [
            {
              p: 2,
              t: 'v',
            },
          ],
          sttm2: [
            {
              p: 2,
              t: 'v',
            },
          ],
        },
      },
      {
        verseId: 47470,
        shabadId: 3993,
        verse: {
          gurmukhi: 'swic smwnI gurmuiK min BwnI gurmuiK swbqu jwgy ]',
          unicode: 'ਸਾਚਿ ਸਮਾਨੀ ਗੁਰਮੁਖਿ ਮਨਿ ਭਾਨੀ ਗੁਰਮੁਖਿ ਸਾਬਤੁ ਜਾਗੇ ॥',
        },
        larivaar: {
          gurmukhi: 'swicsmwnIgurmuiKminBwnIgurmuiKswbqujwgy]',
          unicode: 'ਸਾਚਿਸਮਾਨੀਗੁਰਮੁਖਿਮਨਿਭਾਨੀਗੁਰਮੁਖਿਸਾਬਤੁਜਾਗੇ॥',
        },
        translation: {
          en: {
            bdb: 'The Gurmukhs are merged in the True Lord; they are pleasing to His Mind. The Gurmukhs are intact, safe and sound, awake and awake.',
            ms: "The Guru-wards, who are merged in the True Name are pleasing to the Lord's mind. The saints remain whole and wakeful.",
            ssk: 'The Gurmukhs are merged in the True Lord; they are pleasing to His Mind. The Gurmukhs are intact, safe and sound, awake and awake.',
          },
          pu: {
            ss: {
              gurmukhi:
                'hy BweI! gurU dy snmuK rihx vwly mnu`KW dI suriq sdw-iQr pRBU ivc lIn rihMdI hY, (auhnW ƒ ieh dSw Awpxy) mn ivc ipAwrI l`gdI hY [ hy BweI! gurU dy snmuK rihx vwly mnu`K sdw hI sucyq rihMdy hn [',
              unicode:
                'ਹੇ ਭਾਈ! ਗੁਰੂ ਦੇ ਸਨਮੁਖ ਰਹਿਣ ਵਾਲੇ ਮਨੁੱਖਾਂ ਦੀ ਸੁਰਤਿ ਸਦਾ-ਥਿਰ ਪ੍ਰਭੂ ਵਿਚ ਲੀਨ ਰਹਿੰਦੀ ਹੈ, (ਉਹਨਾਂ ਨੂੰ ਇਹ ਦਸ਼ਾ ਆਪਣੇ) ਮਨ ਵਿਚ ਪਿਆਰੀ ਲੱਗਦੀ ਹੈ । ਹੇ ਭਾਈ! ਗੁਰੂ ਦੇ ਸਨਮੁਖ ਰਹਿਣ ਵਾਲੇ ਮਨੁੱਖ ਸਦਾ ਹੀ ਸੁਚੇਤ ਰਹਿੰਦੇ ਹਨ ।',
            },
            ft: {
              gurmukhi:
                'scy myN smweI hUeI buDI ijn gurmuKoN ky mn myN BweI hY, vohI gurmuK prmysr ky Bjn myN jwgy hUey swbqu hYN]',
              unicode:
                'ਸਚੇ ਮੇਂ ਸਮਾਈ ਹੂਈ ਬੁਧੀ ਜਿਨ ਗੁਰਮੁਖੋਂ ਕੇ ਮਨ ਮੇਂ ਭਾਈ ਹੈ, ਵੋਹੀ ਗੁਰਮੁਖ ਪਰਮੇਸਰ ਕੇ ਭਜਨ ਮੇਂ ਜਾਗੇ ਹੂਏ ਸਾਬਤੁ ਹੈਂ॥',
            },
            bdb: {
              gurmukhi:
                'hy BweI! gurU dy snmuK rihx vwly mnu`KW dI suriq sdw-iQr pRBU ivc lIn rihMdI hY, (auhnW ƒ ieh dSw Awpxy) mn ivc ipAwrI l`gdI hY [ hy BweI! gurU dy snmuK rihx vwly mnu`K sdw hI sucyq rihMdy hn [',
              unicode:
                'ਹੇ ਭਾਈ! ਗੁਰੂ ਦੇ ਸਨਮੁਖ ਰਹਿਣ ਵਾਲੇ ਮਨੁੱਖਾਂ ਦੀ ਸੁਰਤਿ ਸਦਾ-ਥਿਰ ਪ੍ਰਭੂ ਵਿਚ ਲੀਨ ਰਹਿੰਦੀ ਹੈ, (ਉਹਨਾਂ ਨੂੰ ਇਹ ਦਸ਼ਾ ਆਪਣੇ) ਮਨ ਵਿਚ ਪਿਆਰੀ ਲੱਗਦੀ ਹੈ । ਹੇ ਭਾਈ! ਗੁਰੂ ਦੇ ਸਨਮੁਖ ਰਹਿਣ ਵਾਲੇ ਮਨੁੱਖ ਸਦਾ ਹੀ ਸੁਚੇਤ ਰਹਿੰਦੇ ਹਨ ।',
            },
            ms: {
              gurmukhi:
                'gurU AnuswrI nwm AMdr lIn hn, suAwmI dy ic`q ƒ cMgy l`gdy hn[ sMq sMpUrn Aqy Kbrdwr rihMdy hn[',
              unicode:
                'ਗੁਰੂ ਅਨੁਸਾਰੀ ਨਾਮ ਅੰਦਰ ਲੀਨ ਹਨ, ਸੁਆਮੀ ਦੇ ਚਿੱਤ ਨੂੰ ਚੰਗੇ ਲੱਗਦੇ ਹਨ। ਸੰਤ ਸੰਪੂਰਨ ਅਤੇ ਖਬਰਦਾਰ ਰਹਿੰਦੇ ਹਨ।',
            },
          },
          es: {
            sn: 'Sí, esta Unión complace a la mente del Gurmukj, volviéndolo íntegro, permanece despierto.',
          },
          hi: {
            ss: 'हे भाई ! गुरू के सन्मुख रहने वाले मनुष्यों की सुरति सदा-स्थिर प्रभू में लीन रहती है। (उनको ये दशा अपने) मन में प्यारी लगती है।',
            sts: 'गुरुमुख परम सत्य में लवलीन रहते हैं, यही उनके मन को भाता है और वे सदैव जाग्रत रहते हैं।',
          },
        },
        transliteration: {
          english: 'saach samaanee gurmukh man bhaanee gurmukh saabat jaage ||',
          hindi: 'साचि समानी गुरमुखि मनि भानी गुरमुखि साबतु जागे ॥',
          en: 'saach samaanee gurmukh man bhaanee gurmukh saabat jaage ||',
          hi: 'साचि समानी गुरमुखि मनि भानी गुरमुखि साबतु जागे ॥',
          ipa: 'sɑt͡ʃ səmɑni Gʊrəmʊkʰ mən ɓɑni Gʊrəmʊkʰ sɑbət̪ d͡ʒɑGe.',
          ur: 'ساچ سمانیِ گُرمکھ من بھانیِ گُرمکھ سابت جاگے ۔۔',
        },
        pageNo: 1111,
        lineNo: 2,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [
            {
              p: 4,
              t: 'v',
            },
            {
              p: 1,
              t: 'y',
            },
          ],
          igurbani: [
            {
              p: 4,
              t: 'v',
            },
            {
              p: 1,
              t: 'y',
            },
          ],
          sttm2: [
            {
              p: 4,
              t: 'v',
            },
          ],
        },
      },
      {
        verseId: 47471,
        shabadId: 3993,
        verse: {
          gurmukhi: 'swcu nwmu AMimRqu guir dIAw hir crnI ilv lwgy ]',
          unicode: 'ਸਾਚੁ ਨਾਮੁ ਅੰਮ੍ਰਿਤੁ ਗੁਰਿ ਦੀਆ ਹਰਿ ਚਰਨੀ ਲਿਵ ਲਾਗੇ ॥',
        },
        larivaar: {
          gurmukhi: 'swcunwmuAMimRquguirdIAwhircrnIilvlwgy]',
          unicode: 'ਸਾਚੁਨਾਮੁਅੰਮ੍ਰਿਤੁਗੁਰਿਦੀਆਹਰਿਚਰਨੀਲਿਵਲਾਗੇ॥',
        },
        translation: {
          en: {
            bdb: "The Guru blesses them with the Ambrosial Nectar of the True Name; they are lovingly attuned to the Lord's Feet.",
            ms: "The Guru blesses them with the Nectar of the True name and they are attuned to the Lord's feet.",
            ssk: "The Guru blesses them with the Ambrosial Nectar of the True Name; they are lovingly attuned to the Lord's Feet.",
          },
          pu: {
            ss: {
              gurmukhi:
                'gurU ny auhnW ƒ Awqmk jIvn dyx vwlw sdw-iQr hir-nwm b^iSAw huMdw hY, auhnW dI ilv prmwqmw dy crnW ivc l`gI rihMdI hY [',
              unicode:
                'ਗੁਰੂ ਨੇ ਉਹਨਾਂ ਨੂੰ ਆਤਮਕ ਜੀਵਨ ਦੇਣ ਵਾਲਾ ਸਦਾ-ਥਿਰ ਹਰਿ-ਨਾਮ ਬਖ਼ਸ਼ਿਆ ਹੁੰਦਾ ਹੈ, ਉਹਨਾਂ ਦੀ ਲਿਵ ਪਰਮਾਤਮਾ ਦੇ ਚਰਨਾਂ ਵਿਚ ਲੱਗੀ ਰਹਿੰਦੀ ਹੈ ।',
            },
            ft: {
              gurmukhi:
                'ijs kw scw nwmu AMimRq rUp guroN ny dIAw hY iqs kI ibrqI hrI ky crnoN myN lwgI hY]',
              unicode:
                'ਜਿਸ ਕਾ ਸਚਾ ਨਾਮੁ ਅੰਮ੍ਰਿਤ ਰੂਪ ਗੁਰੋਂ ਨੇ ਦੀਆ ਹੈ ਤਿਸ ਕੀ ਬਿਰਤੀ ਹਰੀ ਕੇ ਚਰਨੋਂ ਮੇਂ ਲਾਗੀ ਹੈ॥',
            },
            bdb: {
              gurmukhi:
                'gurU ny auhnW ƒ Awqmk jIvn dyx vwlw sdw-iQr hir-nwm b^iSAw huMdw hY, auhnW dI ilv prmwqmw dy crnW ivc l`gI rihMdI hY [',
              unicode:
                'ਗੁਰੂ ਨੇ ਉਹਨਾਂ ਨੂੰ ਆਤਮਕ ਜੀਵਨ ਦੇਣ ਵਾਲਾ ਸਦਾ-ਥਿਰ ਹਰਿ-ਨਾਮ ਬਖ਼ਸ਼ਿਆ ਹੁੰਦਾ ਹੈ, ਉਹਨਾਂ ਦੀ ਲਿਵ ਪਰਮਾਤਮਾ ਦੇ ਚਰਨਾਂ ਵਿਚ ਲੱਗੀ ਰਹਿੰਦੀ ਹੈ ।',
            },
            ms: {
              gurmukhi:
                'gurU jI aunHW ƒ siqnwm dw Aib-ihXwq bKSdy hn qy aunHW dw pRBU dy crnw nwl ipAwr pY jWdw hY[',
              unicode:
                'ਗੁਰੂ ਜੀ ਉਨ੍ਹਾਂ ਨੂੰ ਸਤਿਨਾਮ ਦਾ ਅਬਿ-ਹਿਯਾਤ ਬਖਸ਼ਦੇ ਹਨ ਤੇ ਉਨ੍ਹਾਂ ਦਾ ਪ੍ਰਭੂ ਦੇ ਚਰਨਾ ਨਾਲ ਪਿਆਰ ਪੈ ਜਾਂਦਾ ਹੈ।',
            },
          },
          es: {
            sn: 'Él es bendecido con el Nombre Néctar de la Verdad, entonándose en los Pies del Guru.',
          },
          hi: {
            ss: 'हे भाई ! गुरू के सन्मुख रहने वाले मनुष्य सदा ही सचेत रहते हैं। गुरू ने उनको आत्मिक जीवन देने वाला सदा-स्थिर हरी-नाम बख्शा होता है। उनकी लिव परमात्मा के चरणों में लगी रहती है।',
            sts: 'गुरु उन्हें सच्चा नामामृत देता है और उनकी प्रभु-चरणों में लगन लगी रहती है।',
          },
        },
        transliteration: {
          english: 'saach naam a(n)mrit gur dheeaa har charanee liv laage ||',
          hindi: 'साचु नामु अंमृतु गुरि दीआ हरि चरनी लिव लागे ॥',
          en: 'saach naam a(n)mrit gur dheeaa har charanee liv laage ||',
          hi: 'साचु नामु अंमृतु गुरि दीआ हरि चरनी लिव लागे ॥',
          ipa: 'sɑt͡ʃ nɑm əŋmɪɹət̪ Gʊr d̪iəɑ hər t͡ʃərəni lɪʋ lɑGe.',
          ur: 'ساچ نام اںمرت گُر دیِآ هر چرنیِ لو لاگے ۔۔',
        },
        pageNo: 1111,
        lineNo: 2,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [
            {
              p: 4,
              t: 'v',
            },
          ],
          igurbani: [
            {
              p: 4,
              t: 'v',
            },
          ],
          sttm2: [
            {
              p: 4,
              t: 'v',
            },
          ],
        },
      },
      {
        verseId: 47472,
        shabadId: 3993,
        verse: {
          gurmukhi: 'pRgtI joiq joiq mih jwqw mnmuiK Brim BulwxI ]',
          unicode: 'ਪ੍ਰਗਟੀ ਜੋਤਿ ਜੋਤਿ ਮਹਿ ਜਾਤਾ ਮਨਮੁਖਿ ਭਰਮਿ ਭੁਲਾਣੀ ॥',
        },
        larivaar: {
          gurmukhi: 'pRgtIjoiqjoiqmihjwqwmnmuiKBrimBulwxI]',
          unicode: 'ਪ੍ਰਗਟੀਜੋਤਿਜੋਤਿਮਹਿਜਾਤਾਮਨਮੁਖਿਭਰਮਿਭੁਲਾਣੀ॥',
        },
        translation: {
          en: {
            bdb: 'The Divine Light is revealed, and in that Light, they achieve realization; the self-willed manmukhs wander in doubt and confusion.',
            ms: 'Within them becomes manifest the illumination of gnosis and through that illumination know they their Lord, but the egocentrics stray in doubt.',
            ssk: 'The Divine Light is revealed, and in that Light, they achieve realization; the self-willed manmukhs wander in doubt and confusion.',
          },
          pu: {
            ss: {
              gurmukhi:
                'hy BweI! gurmuKW dy AMdr prmwqmw dI joiq dw cwnx ho jWdw hY, auh hryk jIv ivc ausy r`bI joiq ƒ v`sdI smJdy hn [ pr Awpxy mn dy ip`Cy qurn vwlI jIv-iesq®I Btkxw dy kwrn kurwhy peI rihMdI hY [',
              unicode:
                'ਹੇ ਭਾਈ! ਗੁਰਮੁਖਾਂ ਦੇ ਅੰਦਰ ਪਰਮਾਤਮਾ ਦੀ ਜੋਤਿ ਦਾ ਚਾਨਣ ਹੋ ਜਾਂਦਾ ਹੈ, ਉਹ ਹਰੇਕ ਜੀਵ ਵਿਚ ਉਸੇ ਰੱਬੀ ਜੋਤਿ ਨੂੰ ਵੱਸਦੀ ਸਮਝਦੇ ਹਨ । ਪਰ ਆਪਣੇ ਮਨ ਦੇ ਪਿੱਛੇ ਤੁਰਨ ਵਾਲੀ ਜੀਵ-ਇਸਤ੍ਰੀ ਭਟਕਣਾ ਦੇ ਕਾਰਨ ਕੁਰਾਹੇ ਪਈ ਰਹਿੰਦੀ ਹੈ ।',
            },
            ft: {
              gurmukhi:
                'gurmuKoN ky irdy myN (joiq) gÎwq pRgtI hY, iqs kr ky iqnoN ny (joiq) vwhgurU ko jwxw hY AOr mnmuKoN kI buDI BRm myN BUl rhI hY]',
              unicode:
                'ਗੁਰਮੁਖੋਂ ਕੇ ਰਿਦੇ ਮੇਂ (ਜੋਤਿ) ਗ੍ਯਾਤ ਪ੍ਰਗਟੀ ਹੈ, ਤਿਸ ਕਰ ਕੇ ਤਿਨੋਂ ਨੇ (ਜੋਤਿ) ਵਾਹਗੁਰੂ ਕੋ ਜਾਣਾ ਹੈ ਔਰ ਮਨਮੁਖੋਂ ਕੀ ਬੁਧੀ ਭ੍ਰਮ ਮੇਂ ਭੂਲ ਰਹੀ ਹੈ॥',
            },
            bdb: {
              gurmukhi:
                'hy BweI! gurmuKW dy AMdr prmwqmw dI joiq dw cwnx ho jWdw hY, auh hryk jIv ivc ausy r`bI joiq ƒ v`sdI smJdy hn [ pr Awpxy mn dy ip`Cy qurn vwlI jIv-iesq®I Btkxw dy kwrn kurwhy peI rihMdI hY [',
              unicode:
                'ਹੇ ਭਾਈ! ਗੁਰਮੁਖਾਂ ਦੇ ਅੰਦਰ ਪਰਮਾਤਮਾ ਦੀ ਜੋਤਿ ਦਾ ਚਾਨਣ ਹੋ ਜਾਂਦਾ ਹੈ, ਉਹ ਹਰੇਕ ਜੀਵ ਵਿਚ ਉਸੇ ਰੱਬੀ ਜੋਤਿ ਨੂੰ ਵੱਸਦੀ ਸਮਝਦੇ ਹਨ । ਪਰ ਆਪਣੇ ਮਨ ਦੇ ਪਿੱਛੇ ਤੁਰਨ ਵਾਲੀ ਜੀਵ-ਇਸਤ੍ਰੀ ਭਟਕਣਾ ਦੇ ਕਾਰਨ ਕੁਰਾਹੇ ਪਈ ਰਹਿੰਦੀ ਹੈ ।',
            },
            ms: {
              gurmukhi:
                'aunHW dy AMdr r`bI igAwq dw nUr nwjl ho jWdw hY Aqy aus nUr dy rwhIN auh Awpxy sweIN ƒ jwx lYNdy hn pRMqU Awp hudry sMdyh AMdr Btkdy hn[',
              unicode:
                'ਉਨ੍ਹਾਂ ਦੇ ਅੰਦਰ ਰੱਬੀ ਗਿਆਤ ਦਾ ਨੂਰ ਨਾਜਲ ਹੋ ਜਾਂਦਾ ਹੈ ਅਤੇ ਉਸ ਨੂਰ ਦੇ ਰਾਹੀਂ ਉਹ ਆਪਣੇ ਸਾਈਂ ਨੂੰ ਜਾਣ ਲੈਂਦੇ ਹਨ ਪ੍ਰੰਤੂ ਆਪ ਹੁਦਰੇ ਸੰਦੇਹ ਅੰਦਰ ਭਟਕਦੇ ਹਨ।',
            },
          },
          es: {
            sn: 'En él está la Iluminación de la Sabiduría, sí, a través de su Luz, la Luz de Dios es revelada, pero el voluntarioso es confundido por la duda.',
          },
          hi: {
            ss: 'हे भाई ! गुरमुखों के अंदर परमात्मा की ज्योति का प्रकाश हो जाता है। वे हरेक जीव में उसी ईश्वरीय-ज्योति को बसता समझते हैं। पर अपने मन के पीछे चलने वाली जीव-स्त्री भटकना के कारण गलत रास्ते पर पड़ी रहती है।',
            sts: 'उनके अन्तर्मन में परम-ज्योति प्रगट हो जाती है, वे परम-सत्य को जान लेते हैं, मगर मनमुखी जीव भ्रमों में ही भूले रहते हैं।',
          },
        },
        transliteration: {
          english: 'pragaTee jot jot meh jaataa manmukh bharam bhulaanee ||',
          hindi: 'प्रगटी जोति जोति महि जाता मनमुखि भरमि भुलाणी ॥',
          en: 'pragaTee jot jot meh jaataa manmukh bharam bhulaanee ||',
          hi: 'प्रगटी जोति जोति महि जाता मनमुखि भरमि भुलाणी ॥',
          ipa: 'pɹəGəʈi d͡ʒɔt̪ d͡ʒɔt̪ məh d͡ʒɑt̪ɑ mənəmʊkʰ ɓərəm ɓʊlɑɳi.',
          ur: 'پرگٹیِ جوت جوت مهِ جاتا منمکھ بھرم بھُلاݨیِ ۔۔',
        },
        pageNo: 1111,
        lineNo: 3,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [
            {
              p: 4,
              t: 'v',
            },
          ],
          igurbani: [
            {
              p: 4,
              t: 'v',
            },
          ],
          sttm2: [
            {
              p: 4,
              t: 'v',
            },
          ],
        },
      },
      {
        verseId: 47473,
        shabadId: 3993,
        verse: {
          gurmukhi: 'nwnk Boru BieAw mnu mwinAw jwgq rYix ivhwxI ]2]',
          unicode: 'ਨਾਨਕ ਭੋਰੁ ਭਇਆ ਮਨੁ ਮਾਨਿਆ ਜਾਗਤ ਰੈਣਿ ਵਿਹਾਣੀ ॥੨॥',
        },
        larivaar: {
          gurmukhi: 'nwnkBoruBieAwmnumwinAwjwgqrYixivhwxI]2]',
          unicode: 'ਨਾਨਕਭੋਰੁਭਇਆਮਨੁਮਾਨਿਆਜਾਗਤਰੈਣਿਵਿਹਾਣੀ॥੨॥',
        },
        translation: {
          en: {
            bdb: 'O Nanak, when the dawn breaks, their minds are satisfied; they pass their life-night awake and aware. ||2||',
            ms: 'Nanak, when the dawn of wisdom breaks, their mind is propitiated and they pass their Life night-awake.',
            ssk: 'O Nanak, when the dawn breaks, their minds are satisfied; they pass their life-night awake and aware. ||2||',
          },
          pu: {
            ss: {
              gurmukhi:
                'hy nwnk! gurU dy snmuK rihx vwly mnu`KW dy AMdr Awqmk jIvn dI sUJ dw cwnx hoieAw rihMdw hY, auhnW dw mn (aus cwnx ivc) pricAw rihMdw hY [ (mwieAw dy h`ilAW v`loN) sucyq rihMidAW hI auhnW dI jIvn-rwq bIqdI hY [2[',
              unicode:
                'ਹੇ ਨਾਨਕ! ਗੁਰੂ ਦੇ ਸਨਮੁਖ ਰਹਿਣ ਵਾਲੇ ਮਨੁੱਖਾਂ ਦੇ ਅੰਦਰ ਆਤਮਕ ਜੀਵਨ ਦੀ ਸੂਝ ਦਾ ਚਾਨਣ ਹੋਇਆ ਰਹਿੰਦਾ ਹੈ, ਉਹਨਾਂ ਦਾ ਮਨ (ਉਸ ਚਾਨਣ ਵਿਚ) ਪਰਚਿਆ ਰਹਿੰਦਾ ਹੈ । (ਮਾਇਆ ਦੇ ਹੱਲਿਆਂ ਵੱਲੋਂ) ਸੁਚੇਤ ਰਹਿੰਦਿਆਂ ਹੀ ਉਹਨਾਂ ਦੀ ਜੀਵਨ-ਰਾਤ ਬੀਤਦੀ ਹੈ ।੨।',
            },
            ft: {
              gurmukhi:
                'sRI gurU jI khqy hYN: gurmuKoN ko gÎwn rUpI idn hUAw hY, vwihgurU myN mn mwnw igAw hY[ Bjn myN jwgqÎoN ko iqn kI AvsQw rUp rwqRI ibqIq BeI hY]2]ÇAb gurmiq kw Plu idKwvqy hYN:',
              unicode:
                'ਸ੍ਰੀ ਗੁਰੂ ਜੀ ਕਹਤੇ ਹੈਂ: ਗੁਰਮੁਖੋਂ ਕੋ ਗ੍ਯਾਨ ਰੂਪੀ ਦਿਨ ਹੂਆ ਹੈ, ਵਾਹਿਗੁਰੂ ਮੇਂ ਮਨ ਮਾਨਾ ਗਿਆ ਹੈ। ਭਜਨ ਮੇਂ ਜਾਗਤ੍ਯੋਂ ਕੋ ਤਿਨ ਕੀ ਅਵਸਥਾ ਰੂਪ ਰਾਤ੍ਰੀ ਬਿਤੀਤ ਭਈ ਹੈ॥੨॥☬ਅਬ ਗੁਰਮਤਿ ਕਾ ਫਲੁ ਦਿਖਾਵਤੇ ਹੈਂ:',
            },
            bdb: {
              gurmukhi:
                'hy nwnk! gurU dy snmuK rihx vwly mnu`KW dy AMdr Awqmk jIvn dI sUJ dw cwnx hoieAw rihMdw hY, auhnW dw mn (aus cwnx ivc) pricAw rihMdw hY [ (mwieAw dy h`ilAW v`loN) sucyq rihMidAW hI auhnW dI jIvn-rwq bIqdI hY [2[',
              unicode:
                'ਹੇ ਨਾਨਕ! ਗੁਰੂ ਦੇ ਸਨਮੁਖ ਰਹਿਣ ਵਾਲੇ ਮਨੁੱਖਾਂ ਦੇ ਅੰਦਰ ਆਤਮਕ ਜੀਵਨ ਦੀ ਸੂਝ ਦਾ ਚਾਨਣ ਹੋਇਆ ਰਹਿੰਦਾ ਹੈ, ਉਹਨਾਂ ਦਾ ਮਨ (ਉਸ ਚਾਨਣ ਵਿਚ) ਪਰਚਿਆ ਰਹਿੰਦਾ ਹੈ । (ਮਾਇਆ ਦੇ ਹੱਲਿਆਂ ਵੱਲੋਂ) ਸੁਚੇਤ ਰਹਿੰਦਿਆਂ ਹੀ ਉਹਨਾਂ ਦੀ ਜੀਵਨ-ਰਾਤ ਬੀਤਦੀ ਹੈ ।੨।',
            },
            ms: {
              gurmukhi:
                'nwnk jd dwnweI dw phuPutwlw ho jWdw hY aunHW dI Awqmw sMquSt ho jWdI hY Aqy auh AwpxI jIvn-rwqRI jwg ky ibqwauNdy hn[',
              unicode:
                'ਨਾਨਕ ਜਦ ਦਾਨਾਈ ਦਾ ਪਹੁਫੁਟਾਲਾ ਹੋ ਜਾਂਦਾ ਹੈ ਉਨ੍ਹਾਂ ਦੀ ਆਤਮਾ ਸੰਤੁਸ਼ਟ ਹੋ ਜਾਂਦੀ ਹੈ ਅਤੇ ਉਹ ਆਪਣੀ ਜੀਵਨ-ਰਾਤ੍ਰੀ ਜਾਗ ਕੇ ਬਿਤਾਉਂਦੇ ਹਨ।',
            },
          },
          es: {
            sn: 'Cuando el Amanecer de la Sabiduría llega, él logra pasar la noche despierto y en el Contentamiento. (2)',
          },
          hi: {
            ss: 'हे नानक ! गुरू के सन्मुख रहने वाले मनुष्यों के अंदर आत्मिक जीवन की सूझ का प्रकाश हुआ रहता है। उनका मन (उस रौशनी में) परचा रहता है। (माया के हमलों की ओर से) सचेत रहते हुए ही उनकी जीवन की रात बीतती है। 2।',
            sts: 'गुरु नानक का मत है कि गुरमुख जनों के लिए सत्य का भोर बना रहता है, उनका मन प्रसन्न हो जाता है और उनकी प्रभु-भक्ति में जागते ही जीवन रूपी रात्रि व्यतीत होती है।॥२॥',
          },
        },
        transliteration: {
          english: 'naanak bhor bhiaa man maaniaa jaagat rain vihaanee ||2||',
          hindi: 'नानक भोरु भइआ मनु मानिआ जागत रैणि विहाणी ॥२॥',
          en: 'naanak bhor bhiaa man maaniaa jaagat rain vihaanee ||2||',
          hi: 'नानक भोरु भइआ मनु मानिआ जागत रैणि विहाणी ॥२॥',
          ipa: 'nɑnək ɓɔr ɓɪɑ mən mɑnɪəɑ d͡ʒɑGət̪ ræɳ ʋɪhɑɳi.2.',
          ur: 'نانک بھور بھایا من مانآ جاگت رَےݨ وهاݨیِ ۔۔۲۔۔',
        },
        pageNo: 1111,
        lineNo: 4,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [
            {
              p: 4,
              t: 'v',
            },
            {
              p: 0,
              t: 'y',
            },
          ],
          igurbani: [
            {
              p: 4,
              t: 'v',
            },
            {
              p: 0,
              t: 'y',
            },
          ],
          sttm2: [
            {
              p: 0,
              t: 'v',
            },
            {
              p: 4,
              t: 'v',
            },
          ],
        },
      },
      {
        verseId: 47474,
        shabadId: 3993,
        verse: {
          gurmukhi: 'Aaugx vIsirAw guxI Gru kIAw rwm ]',
          unicode: 'ਅਉਗਣ ਵੀਸਰਿਆ ਗੁਣੀ ਘਰੁ ਕੀਆ ਰਾਮ ॥',
        },
        larivaar: {
          gurmukhi: 'AaugxvIsirAwguxIGrukIAwrwm]',
          unicode: 'ਅਉਗਣਵੀਸਰਿਆਗੁਣੀਘਰੁਕੀਆਰਾਮ॥',
        },
        translation: {
          en: {
            bdb: "Forgetting faults and demerits, virtue and merit enter one's home.",
            ms: 'When man forsakes his vice, the virtues come to abode within him. The one Lord is pervading all.',
            ssk: "Forgetting faults and demerits, virtue and merit enter one's home.",
          },
          pu: {
            ss: {
              gurmukhi:
                'hy BweI! (ijs mnu`K dy ihrdy-AwkwS ivc ‘qwrw ciVAw lMmw’, aus dy AMdroN) swry AOgux mu`k jWdy hn, (aus dy AMdr) gux Awpxw itkwxw Aw bxWdy hn [',
              unicode:
                'ਹੇ ਭਾਈ! (ਜਿਸ ਮਨੁੱਖ ਦੇ ਹਿਰਦੇ-ਆਕਾਸ਼ ਵਿਚ ‘ਤਾਰਾ ਚੜਿਆ ਲੰਮਾ’, ਉਸ ਦੇ ਅੰਦਰੋਂ) ਸਾਰੇ ਔਗੁਣ ਮੁੱਕ ਜਾਂਦੇ ਹਨ, (ਉਸ ਦੇ ਅੰਦਰ) ਗੁਣ ਆਪਣਾ ਟਿਕਾਣਾ ਆ ਬਣਾਂਦੇ ਹਨ ।',
            },
            ft: {
              gurmukhi:
                'hy BweI! iqn gurmuKoN ky mn sy AOguxo kw smdwie ibsr gÎw hY AOr iqn ky (Gru) irdy myN guxoN ny invws kIAw hY AOr iqn kw iXh inscw hUAw hY]',
              unicode:
                'ਹੇ ਭਾਈ! ਤਿਨ ਗੁਰਮੁਖੋਂ ਕੇ ਮਨ ਸੇ ਔਗੁਣੋ ਕਾ ਸਮਦਾਇ ਬਿਸਰ ਗ੍ਯਾ ਹੈ ਔਰ ਤਿਨ ਕੇ (ਘਰੁ) ਰਿਦੇ ਮੇਂ ਗੁਣੋਂ ਨੇ ਨਿਵਾਸ ਕੀਆ ਹੈ ਔਰ ਤਿਨ ਕਾ ਯਿਹ ਨਿਸਚਾ ਹੂਆ ਹੈ॥',
            },
            bdb: {
              gurmukhi:
                'hy BweI! (ijs mnu`K dy ihrdy-AwkwS ivc ‘qwrw ciVAw lMmw’, aus dy AMdroN) swry AOgux mu`k jWdy hn, (aus dy AMdr) gux Awpxw itkwxw Aw bxWdy hn [',
              unicode:
                'ਹੇ ਭਾਈ! (ਜਿਸ ਮਨੁੱਖ ਦੇ ਹਿਰਦੇ-ਆਕਾਸ਼ ਵਿਚ ‘ਤਾਰਾ ਚੜਿਆ ਲੰਮਾ’, ਉਸ ਦੇ ਅੰਦਰੋਂ) ਸਾਰੇ ਔਗੁਣ ਮੁੱਕ ਜਾਂਦੇ ਹਨ, (ਉਸ ਦੇ ਅੰਦਰ) ਗੁਣ ਆਪਣਾ ਟਿਕਾਣਾ ਆ ਬਣਾਂਦੇ ਹਨ ।',
            },
            ms: {
              gurmukhi:
                'jd ienswn AwpxI bMdI ƒ Cf idMdw hY qw nykIAW Aw ky aus dy AMdr vsx lg jWdIAW hn[ iek suAwmI hI swry ivApk ho irhw hY[',
              unicode:
                'ਜਦ ਇਨਸਾਨ ਆਪਣੀ ਬੰਦੀ ਨੂੰ ਛਡ ਦਿੰਦਾ ਹੈ ਤਾ ਨੇਕੀਆਂ ਆ ਕੇ ਉਸ ਦੇ ਅੰਦਰ ਵਸਣ ਲਗ ਜਾਂਦੀਆਂ ਹਨ। ਇਕ ਸੁਆਮੀ ਹੀ ਸਾਰੇ ਵਿਅਪਕ ਹੋ ਰਿਹਾ ਹੈ।',
            },
          },
          es: {
            sn: 'Cuando uno se deshace de sus vicios, la Virtud viene a llenar su ser, así ve al Uno prevaleciendo en todo y a nadie más, ',
          },
          hi: {
            ss: "हे भाई ! (जिस मनुष्य के हृदय-आकाश में 'तारा चढ़िआ लंमा'। उसके अंदर से) सारे अवगुण समाप्त हो जाते हैं। (उसके अंदर) गुण अपना ठिकाना बनाते हैं।",
            sts: 'जिसके हृदय-घर में गुण बस जाते हैं, उसके अवगुण समाप्त हो जाते हैं।',
          },
        },
        transliteration: {
          english: 'aaugan veesariaa gunee ghar keeaa raam ||',
          hindi: 'अउगण वीसरिआ गुणी घरु कीआ राम ॥',
          en: 'aaugan veesariaa gunee ghar keeaa raam ||',
          hi: 'अउगण वीसरिआ गुणी घरु कीआ राम ॥',
          ipa: 'əoʊGəɳ ʋisərɪəɑ Gʊɳi Gʰər kiəɑ rɑm.',
          ur: 'ااگݨ ویِسرآ گُݨیِ گھر کیِآ رام ۔۔',
        },
        pageNo: 1111,
        lineNo: 4,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [
            {
              p: 1,
              t: 'v',
            },
          ],
          igurbani: [
            {
              p: 1,
              t: 'v',
            },
          ],
          sttm2: [
            {
              p: 1,
              t: 'v',
            },
          ],
        },
      },
      {
        verseId: 47475,
        shabadId: 3993,
        verse: {
          gurmukhi: 'eyko riv rihAw Avru n bIAw rwm ]',
          unicode: 'ਏਕੋ ਰਵਿ ਰਹਿਆ ਅਵਰੁ ਨ ਬੀਆ ਰਾਮ ॥',
        },
        larivaar: {
          gurmukhi: 'eykorivrihAwAvrunbIAwrwm]',
          unicode: 'ਏਕੋਰਵਿਰਹਿਆਅਵਰੁਨਬੀਆਰਾਮ॥',
        },
        translation: {
          en: {
            bdb: 'The One Lord is permeating everywhere; there is no other at all.',
            ms: 'There is not another second.',
            ssk: 'The One Lord is permeating everywhere; there is no other at all.',
          },
          pu: {
            ss: {
              gurmukhi:
                'aus mnu`K ƒ iek prmwqmw hI hr QW mOjUd id`sdw hY, aus qoN ibnw koeI hor dUjw nhIN id`sdw [',
              unicode:
                'ਉਸ ਮਨੁੱਖ ਨੂੰ ਇਕ ਪਰਮਾਤਮਾ ਹੀ ਹਰ ਥਾਂ ਮੌਜੂਦ ਦਿੱਸਦਾ ਹੈ, ਉਸ ਤੋਂ ਬਿਨਾ ਕੋਈ ਹੋਰ ਦੂਜਾ ਨਹੀਂ ਦਿੱਸਦਾ ।',
            },
            ft: {
              gurmukhi:
                'eyk vwihgurU srb QW ibAwpk ho rhw hY AOr (bIAw) dUsrw koeI nhIN hY]',
              unicode:
                'ਏਕ ਵਾਹਿਗੁਰੂ ਸਰਬ ਥਾਂ ਬਿਆਪਕ ਹੋ ਰਹਾ ਹੈ ਔਰ (ਬੀਆ) ਦੂਸਰਾ ਕੋਈ ਨਹੀਂ ਹੈ॥',
            },
            bdb: {
              gurmukhi:
                'aus mnu`K ƒ iek prmwqmw hI hr QW mOjUd id`sdw hY, aus qoN ibnw koeI hor dUjw nhIN id`sdw [',
              unicode:
                'ਉਸ ਮਨੁੱਖ ਨੂੰ ਇਕ ਪਰਮਾਤਮਾ ਹੀ ਹਰ ਥਾਂ ਮੌਜੂਦ ਦਿੱਸਦਾ ਹੈ, ਉਸ ਤੋਂ ਬਿਨਾ ਕੋਈ ਹੋਰ ਦੂਜਾ ਨਹੀਂ ਦਿੱਸਦਾ ।',
            },
            ms: {
              gurmukhi: 'koeI hor dUsrw hY hI nhIN[',
              unicode: 'ਕੋਈ ਹੋਰ ਦੂਸਰਾ ਹੈ ਹੀ ਨਹੀਂ।',
            },
          },
          es: {
            sn: 'a nadie más. Sólo Dios lo llena todo, nadie más, y la Fe llega a la mente desde la mente misma. ',
          },
          hi: {
            ss: 'उस मनुष्य को एक परमात्मा ही हर जगह मौजूद दिखाई देता है। उसके बिना और कोई दूसरा नहीं दिखता।',
            sts: 'एक ईश्वर ही सबमें रमण कर रहा है, उसके बिना कोई नहीं।',
          },
        },
        transliteration: {
          english: 'eko rav rahiaa avar na beeaa raam ||',
          hindi: 'एको रवि रहिआ अवरु न बीआ राम ॥',
          en: 'eko rav rahiaa avar na beeaa raam ||',
          hi: 'एको रवि रहिआ अवरु न बीआ राम ॥',
          ipa: 'eekɔ rəʋ rəhɪəɑ əʋər nə biəɑ rɑm.',
          ur: 'اےکو رو رهِآ اور ن بیِآ رام ۔۔',
        },
        pageNo: 1111,
        lineNo: 5,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [
            {
              p: 2,
              t: 'v',
            },
            {
              p: 5,
              t: 'y',
            },
          ],
          igurbani: [
            {
              p: 2,
              t: 'v',
            },
            {
              p: 5,
              t: 'y',
            },
          ],
          sttm2: [
            {
              p: 2,
              t: 'v',
            },
          ],
        },
      },
      {
        verseId: 47476,
        shabadId: 3993,
        verse: {
          gurmukhi: 'riv rihAw soeI Avru n koeI mn hI qy mnu mwinAw ]',
          unicode: 'ਰਵਿ ਰਹਿਆ ਸੋਈ ਅਵਰੁ ਨ ਕੋਈ ਮਨ ਹੀ ਤੇ ਮਨੁ ਮਾਨਿਆ ॥',
        },
        larivaar: {
          gurmukhi: 'rivrihAwsoeIAvrunkoeImnhIqymnumwinAw]',
          unicode: 'ਰਵਿਰਹਿਆਸੋਈਅਵਰੁਨਕੋਈਮਨਹੀਤੇਮਨੁਮਾਨਿਆ॥',
        },
        translation: {
          en: {
            bdb: 'He is All-pervading; there is no other. The mind comes to believe, from the mind.',
            ms: 'He, the Lord, is permeating all. There is not any other. Belief comes to the mind from the mind itself.',
            ssk: 'He is All-pervading; there is no other. The mind comes to believe, from the mind.',
          },
          pu: {
            ss: {
              gurmukhi:
                'hy BweI! (ijs mnu`K dy AMdr ‘qwrw ciVAw lMmw’, aus ƒ) hr QW iek prmwqmw hI v`sdw  id`sdw hY, aus qoN ibnw koeI hor aus ƒ nhIN id`sdw, aus mnu`K dw mn AMqr-Awqmy (hir-nwm ivc) pricAw rihMdw hY [',
              unicode:
                'ਹੇ ਭਾਈ! (ਜਿਸ ਮਨੁੱਖ ਦੇ ਅੰਦਰ ‘ਤਾਰਾ ਚੜਿਆ ਲੰਮਾ’, ਉਸ ਨੂੰ) ਹਰ ਥਾਂ ਇਕ ਪਰਮਾਤਮਾ ਹੀ ਵੱਸਦਾ  ਦਿੱਸਦਾ ਹੈ, ਉਸ ਤੋਂ ਬਿਨਾ ਕੋਈ ਹੋਰ ਉਸ ਨੂੰ ਨਹੀਂ ਦਿੱਸਦਾ, ਉਸ ਮਨੁੱਖ ਦਾ ਮਨ ਅੰਤਰ-ਆਤਮੇ (ਹਰਿ-ਨਾਮ ਵਿਚ) ਪਰਚਿਆ ਰਹਿੰਦਾ ਹੈ ।',
            },
            ft: {
              gurmukhi:
                "soeI vwihgurU ivAwpk ho rhw hY AOr koeI nhIN, (mn hI) gur mMqR sy mn pqIAwXw hY vw suD mn kr ky mn mwnÎw hY] pRmwx XQw- 'mn hI mn isau khy kbIrw mn sw imilAw n koie]'",
              unicode:
                "ਸੋਈ ਵਾਹਿਗੁਰੂ ਵਿਆਪਕ ਹੋ ਰਹਾ ਹੈ ਔਰ ਕੋਈ ਨਹੀਂ, (ਮਨ ਹੀ) ਗੁਰ ਮੰਤ੍ਰ ਸੇ ਮਨ ਪਤੀਆਯਾ ਹੈ ਵਾ ਸੁਧ ਮਨ ਕਰ ਕੇ ਮਨ ਮਾਨ੍ਯਾ ਹੈ॥ ਪ੍ਰਮਾਣ ਯਥਾ- 'ਮਨ ਹੀ ਮਨ ਸਿਉ ਕਹੇ ਕਬੀਰਾ ਮਨ ਸਾ ਮਿਲਿਆ ਨ ਕੋਇ॥'",
            },
            bdb: {
              gurmukhi:
                'hy BweI! (ijs mnu`K dy AMdr ‘qwrw ciVAw lMmw’, aus ƒ) hr QW iek prmwqmw hI v`sdw  id`sdw hY, aus qoN ibnw koeI hor aus ƒ nhIN id`sdw, aus mnu`K dw mn AMqr-Awqmy (hir-nwm ivc) pricAw rihMdw hY [',
              unicode:
                'ਹੇ ਭਾਈ! (ਜਿਸ ਮਨੁੱਖ ਦੇ ਅੰਦਰ ‘ਤਾਰਾ ਚੜਿਆ ਲੰਮਾ’, ਉਸ ਨੂੰ) ਹਰ ਥਾਂ ਇਕ ਪਰਮਾਤਮਾ ਹੀ ਵੱਸਦਾ  ਦਿੱਸਦਾ ਹੈ, ਉਸ ਤੋਂ ਬਿਨਾ ਕੋਈ ਹੋਰ ਉਸ ਨੂੰ ਨਹੀਂ ਦਿੱਸਦਾ, ਉਸ ਮਨੁੱਖ ਦਾ ਮਨ ਅੰਤਰ-ਆਤਮੇ (ਹਰਿ-ਨਾਮ ਵਿਚ) ਪਰਚਿਆ ਰਹਿੰਦਾ ਹੈ ।',
            },
            ms: {
              gurmukhi:
                'auh suAwmI swry rm irhw hY[ hor koeI hY hI nhIN[ mnUey ƒ mnUey qy hI Brosw Aw jWdw hY[',
              unicode:
                'ਉਹ ਸੁਆਮੀ ਸਾਰੇ ਰਮ ਰਿਹਾ ਹੈ। ਹੋਰ ਕੋਈ ਹੈ ਹੀ ਨਹੀਂ। ਮਨੂਏ ਨੂੰ ਮਨੂਏ ਤੇ ਹੀ ਭਰੋਸਾ ਆ ਜਾਂਦਾ ਹੈ।',
            },
          },
          es: {
            sn: 'Sí, Él, Quien ha establecido los tres modos, la tierra y las aguas, Se revela a través del Guru.',
          },
          hi: {
            ss: "हे भाई ! (जिस मनुष्य के अंदर 'तारा चढ़िआ लंमा'। उसको) हर जगह एक परमात्मा ही बसता दिखता है। उसके बिना कोई और उसको दिखाई नहीं देता। उस मनुष्य का मन अंतरात्मे (हरी-नाम में) परचा रहता है।",
            sts: 'घट-घट में केवल ईश्वर रमण कर रहा है, अन्य कोई नहीं और मन में मन को प्रसन्नता प्राप्त होती है।',
          },
        },
        transliteration: {
          english: 'rav rahiaa soiee avar na koiee man hee te man maaniaa ||',
          hindi: 'रवि रहिआ सोई अवरु न कोई मन ही ते मनु मानिआ ॥',
          en: 'rav rahiaa soiee avar na koiee man hee te man maaniaa ||',
          hi: 'रवि रहिआ सोई अवरु न कोई मन ही ते मनु मानिआ ॥',
          ipa: 'rəʋ rəhɪəɑ sɔei əʋər nə kɔei mən hi t̪e mən mɑnɪəɑ.',
          ur: 'رو رهِآ سوای اور ن کوای من هیِ تے من مانآ ۔۔',
        },
        pageNo: 1111,
        lineNo: 5,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [
            {
              p: 5,
              t: 'v',
            },
            {
              p: 2,
              t: 'y',
            },
          ],
          igurbani: [
            {
              p: 5,
              t: 'v',
            },
            {
              p: 2,
              t: 'y',
            },
          ],
          sttm2: [
            {
              p: 5,
              t: 'v',
            },
          ],
        },
      },
      {
        verseId: 47477,
        shabadId: 3993,
        verse: {
          gurmukhi: 'ijin jl Ql iqRBvx Gtu Gtu QwipAw so pRBu gurmuiK jwinAw ]',
          unicode: 'ਜਿਨਿ ਜਲ ਥਲ ਤ੍ਰਿਭਵਣ ਘਟੁ ਘਟੁ ਥਾਪਿਆ ਸੋ ਪ੍ਰਭੁ ਗੁਰਮੁਖਿ ਜਾਨਿਆ ॥',
        },
        larivaar: {
          gurmukhi: 'ijinjlQliqRBvxGtuGtuQwipAwsopRBugurmuiKjwinAw]',
          unicode: 'ਜਿਨਿਜਲਥਲਤ੍ਰਿਭਵਣਘਟੁਘਟੁਥਾਪਿਆਸੋਪ੍ਰਭੁਗੁਰਮੁਖਿਜਾਨਿਆ॥',
        },
        translation: {
          en: {
            bdb: 'The One who established the water, the land, the three worlds, each and every heart - that God is known by the Gurmukh.',
            ms: "He, who has established the water, the land, the three worlds and all the hearts, that Lord is known by the Guru's grace.",
            ssk: 'The One who established the water, the land, the three worlds, each and every heart - that God is known by the Gurmukh.',
          },
          pu: {
            ss: {
              gurmukhi:
                'ijs (prmwqmw) ny jl Ql iqMny Bvn hryk srIr bxwieAw hY, auh mnu`K aus prmwqmw nwl gurU dI rwhIN fUMGI sWJ bxweI r`Kdw hY [',
              unicode:
                'ਜਿਸ (ਪਰਮਾਤਮਾ) ਨੇ ਜਲ ਥਲ ਤਿੰਨੇ ਭਵਨ ਹਰੇਕ ਸਰੀਰ ਬਣਾਇਆ ਹੈ, ਉਹ ਮਨੁੱਖ ਉਸ ਪਰਮਾਤਮਾ ਨਾਲ ਗੁਰੂ ਦੀ ਰਾਹੀਂ ਡੂੰਘੀ ਸਾਂਝ ਬਣਾਈ ਰੱਖਦਾ ਹੈ ।',
            },
            ft: {
              gurmukhi:
                'ijs vwihgurU ny jl Ql qInoN BvnoN myN srb GtoN ko iesiQq kIAw hUAw hY, so pRBU gurmuKoN ny jwqw hY]',
              unicode:
                'ਜਿਸ ਵਾਹਿਗੁਰੂ ਨੇ ਜਲ ਥਲ ਤੀਨੋਂ ਭਵਨੋਂ ਮੇਂ ਸਰਬ ਘਟੋਂ ਕੋ ਇਸਥਿਤ ਕੀਆ ਹੂਆ ਹੈ, ਸੋ ਪ੍ਰਭੂ ਗੁਰਮੁਖੋਂ ਨੇ ਜਾਤਾ ਹੈ॥',
            },
            bdb: {
              gurmukhi:
                'ijs (prmwqmw) ny jl Ql iqMny Bvn hryk srIr bxwieAw hY, auh mnu`K aus prmwqmw nwl gurU dI rwhIN fUMGI sWJ bxweI r`Kdw hY [',
              unicode:
                'ਜਿਸ (ਪਰਮਾਤਮਾ) ਨੇ ਜਲ ਥਲ ਤਿੰਨੇ ਭਵਨ ਹਰੇਕ ਸਰੀਰ ਬਣਾਇਆ ਹੈ, ਉਹ ਮਨੁੱਖ ਉਸ ਪਰਮਾਤਮਾ ਨਾਲ ਗੁਰੂ ਦੀ ਰਾਹੀਂ ਡੂੰਘੀ ਸਾਂਝ ਬਣਾਈ ਰੱਖਦਾ ਹੈ ।',
            },
            ms: {
              gurmukhi:
                'ijs ny pwxI DrqI iqMny jhwn Aqy swry idl AsQwpn kIqy hn auh suAwmI gurW dI dieAw duAwrw jwixAw jWdw hY[',
              unicode:
                'ਜਿਸ ਨੇ ਪਾਣੀ ਧਰਤੀ ਤਿੰਨੇ ਜਹਾਨ ਅਤੇ ਸਾਰੇ ਦਿਲ ਅਸਥਾਪਨ ਕੀਤੇ ਹਨ ਉਹ ਸੁਆਮੀ ਗੁਰਾਂ ਦੀ ਦਇਆ ਦੁਆਰਾ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ।',
            },
          },
          es: {
            sn: 'El Señor es Todopoderoso, la Causa de todas las causas, Infinito, es Él Quien destruye la Maya de las tres Modalidades.',
          },
          hi: {
            ss: 'जिस (परमात्मा) ने जल-थल तीनों भवन हरेक शरीर बनाए हैं वह मनुष्य उस परमात्मा के साथ गुरू के माध्यम सें गहरी सांझ बनाए रखता है।',
            sts: 'जिसने जल, थल, तीन लोक, घट-घट बनाया है, वह प्रभु तो गुरु के माध्यम से ही जाना जाता है।',
          },
        },
        transliteration: {
          english:
            'jin jal thal tirabhavan ghaT ghaT thaapiaa so prabh gurmukh jaaniaa ||',
          hindi: 'जिनि जल थल तृभवण घटु घटु थापिआ सो प्रभु गुरमुखि जानिआ ॥',
          en: 'jin jal thal tirabhavan ghaT ghaT thaapiaa so prabh gurmukh jaaniaa ||',
          hi: 'जिनि जल थल तृभवण घटु घटु थापिआ सो प्रभु गुरमुखि जानिआ ॥',
          ipa: 'd͡ʒɪn d͡ʒəl t̪ʰəl t̪ɪɹəɓəʋəɳ Gʰəʈ Gʰəʈ t̪ʰɑpɪəɑ sɔ pɹəɓ Gʊrəmʊkʰ d͡ʒɑnɪəɑ.',
          ur: 'جٍن جل تھل تربھوݨ گھٹ گھٹ تھاپآ سو پربھ گُرمکھ جانآ ۔۔',
        },
        pageNo: 1111,
        lineNo: 6,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [
            {
              p: 6,
              t: 'v',
            },
          ],
          igurbani: [
            {
              p: 6,
              t: 'v',
            },
          ],
          sttm2: [
            {
              p: 6,
              t: 'v',
            },
          ],
        },
      },
      {
        verseId: 47478,
        shabadId: 3993,
        verse: {
          gurmukhi: 'krx kwrx smrQ Apwrw iqRibiD myit smweI ]',
          unicode: 'ਕਰਣ ਕਾਰਣ ਸਮਰਥ ਅਪਾਰਾ ਤ੍ਰਿਬਿਧਿ ਮੇਟਿ ਸਮਾਈ ॥',
        },
        larivaar: {
          gurmukhi: 'krxkwrxsmrQApwrwiqRibiDmyitsmweI]',
          unicode: 'ਕਰਣਕਾਰਣਸਮਰਥਅਪਾਰਾਤ੍ਰਿਬਿਧਿਮੇਟਿਸਮਾਈ॥',
        },
        translation: {
          en: {
            bdb: 'The Infinite, All-powerful Lord is the Creator, the Cause of causes; erasing the three-phased Maya, we merge in Him.',
            ms: 'The Lord is the Cause of, All-powerful and Infinite, Effacing the three-phased mammon, one merges in Him.',
            ssk: 'The Infinite, All-powerful Lord is the Creator, the Cause of causes; erasing the three-phased Maya, we merge in Him.',
          },
          pu: {
            ss: {
              gurmukhi:
                'hy nwnk! (ijs mnu`K dy ihrdy-AwkwS ivc ‘qwrw ciVAw lMmw’, auh Awpxy AMdroN) iq®guxI mwieAw dw pRBwv imtw ky aus prmwqmw ivc smwieAw rihMdw hY jo swry jgq dw mUl hY jo swrIAW qwkqW dw mwlk hY Aqy jo byAMq hY [',
              unicode:
                'ਹੇ ਨਾਨਕ! (ਜਿਸ ਮਨੁੱਖ ਦੇ ਹਿਰਦੇ-ਆਕਾਸ਼ ਵਿਚ ‘ਤਾਰਾ ਚੜਿਆ ਲੰਮਾ’, ਉਹ ਆਪਣੇ ਅੰਦਰੋਂ) ਤ੍ਰਿਗੁਣੀ ਮਾਇਆ ਦਾ ਪ੍ਰਭਾਵ ਮਿਟਾ ਕੇ ਉਸ ਪਰਮਾਤਮਾ ਵਿਚ ਸਮਾਇਆ ਰਹਿੰਦਾ ਹੈ ਜੋ ਸਾਰੇ ਜਗਤ ਦਾ ਮੂਲ ਹੈ ਜੋ ਸਾਰੀਆਂ ਤਾਕਤਾਂ ਦਾ ਮਾਲਕ ਹੈ ਅਤੇ ਜੋ ਬੇਅੰਤ ਹੈ ।',
            },
            ft: {
              gurmukhi:
                'jo krn kwrn smrQ Apwr vwihgurU hY, rjo, qmo qInoN guxoN ko myt kr iqsmyN smweI hUeI hY]',
              unicode:
                'ਜੋ ਕਰਨ ਕਾਰਨ ਸਮਰਥ ਅਪਾਰ ਵਾਹਿਗੁਰੂ ਹੈ, ਰਜੋ, ਤਮੋ ਤੀਨੋਂ ਗੁਣੋਂ ਕੋ ਮੇਟ ਕਰ ਤਿਸਮੇਂ ਸਮਾਈ ਹੂਈ ਹੈ॥',
            },
            bdb: {
              gurmukhi:
                'hy nwnk! (ijs mnu`K dy ihrdy-AwkwS ivc ‘qwrw ciVAw lMmw’, auh Awpxy AMdroN) iq®guxI mwieAw dw pRBwv imtw ky aus prmwqmw ivc smwieAw rihMdw hY jo swry jgq dw mUl hY jo swrIAW qwkqW dw mwlk hY Aqy jo byAMq hY [',
              unicode:
                'ਹੇ ਨਾਨਕ! (ਜਿਸ ਮਨੁੱਖ ਦੇ ਹਿਰਦੇ-ਆਕਾਸ਼ ਵਿਚ ‘ਤਾਰਾ ਚੜਿਆ ਲੰਮਾ’, ਉਹ ਆਪਣੇ ਅੰਦਰੋਂ) ਤ੍ਰਿਗੁਣੀ ਮਾਇਆ ਦਾ ਪ੍ਰਭਾਵ ਮਿਟਾ ਕੇ ਉਸ ਪਰਮਾਤਮਾ ਵਿਚ ਸਮਾਇਆ ਰਹਿੰਦਾ ਹੈ ਜੋ ਸਾਰੇ ਜਗਤ ਦਾ ਮੂਲ ਹੈ ਜੋ ਸਾਰੀਆਂ ਤਾਕਤਾਂ ਦਾ ਮਾਲਕ ਹੈ ਅਤੇ ਜੋ ਬੇਅੰਤ ਹੈ ।',
            },
            ms: {
              gurmukhi:
                'swihb hyqUAW dw hyqU srb-SkqIvwn Aqy byAMq hY[ iqMnW hwlqW vwlI mwieAw ƒ myt ky bMdw aus iv`c lIn ho jWdw hY[',
              unicode:
                'ਸਾਹਿਬ ਹੇਤੂਆਂ ਦਾ ਹੇਤੂ ਸਰਬ-ਸ਼ਕਤੀਵਾਨ ਅਤੇ ਬੇਅੰਤ ਹੈ। ਤਿੰਨਾਂ ਹਾਲਤਾਂ ਵਾਲੀ ਮਾਇਆ ਨੂੰ ਮੇਟ ਕੇ ਬੰਦਾ ਉਸ ਵਿੱਚ ਲੀਨ ਹੋ ਜਾਂਦਾ ਹੈ।',
            },
          },
          es: {
            sn: 'Dice Nanak, los vicios del ser humano, se inmergen entonces en sus Virtudes; ',
          },
          hi: {
            ss: "हे नानक ! (जिस मनुष्य के हृदय-आकाश में 'तारा चढ़िआ लंमा'। वह अपने अंदर से) त्रैगुणी माया का प्रभाव मिटा के उस परमात्मा में समाया रहता है जो सारे जगत का मूल है जो सारी ताकतों का मालिक है और जो बेअंत है।",
            sts: 'सर्वकर्ता परमेश्वर सब कुछ करने योग्य है और उसने त्रिगुणात्मक माया को मिटा दिया है।',
          },
        },
        transliteration: {
          english: 'karan kaaran samarath apaaraa tirabidh meT samaiee ||',
          hindi: 'करण कारण समरथ अपारा तृबिधि मेटि समाई ॥',
          en: 'karan kaaran samarath apaaraa tirabidh meT samaiee ||',
          hi: 'करण कारण समरथ अपारा तृबिधि मेटि समाई ॥',
          ipa: 'kərəɳ kɑrəɳ səmərət̪ʰ əpɑrɑ t̪ɪɹəbɪt̪ə̀ meʈ səmɑei.',
          ur: 'کرݨ کارݨ سمرتھ اپارا تربدھ مےٹ سماای ۔۔',
        },
        pageNo: 1111,
        lineNo: 6,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [
            {
              p: 3,
              t: 'v',
            },
            {
              p: 5,
              t: 'y',
            },
          ],
          igurbani: [
            {
              p: 3,
              t: 'v',
            },
            {
              p: 5,
              t: 'y',
            },
          ],
          sttm2: [
            {
              p: 3,
              t: 'v',
            },
          ],
        },
      },
      {
        verseId: 47479,
        shabadId: 3993,
        verse: {
          gurmukhi: 'nwnk Avgx guxh smwxy AYsI gurmiq pweI ]3]',
          unicode: 'ਨਾਨਕ ਅਵਗਣ ਗੁਣਹ ਸਮਾਣੇ ਐਸੀ ਗੁਰਮਤਿ ਪਾਈ ॥੩॥',
        },
        larivaar: {
          gurmukhi: 'nwnkAvgxguxhsmwxyAYsIgurmiqpweI]3]',
          unicode: 'ਨਾਨਕਅਵਗਣਗੁਣਹਸਮਾਣੇਐਸੀਗੁਰਮਤਿਪਾਈ॥੩॥',
        },
        translation: {
          en: {
            bdb: "O Nanak, then, demerits are dissolved by merits; such are the Guru's Teachings. ||3||",
            ms: "Nanak, man's vices then merge in virtues. Such an understanding, he obtains from the Guru.",
            ssk: "O Nanak, then, demerits are dissolved by merits; such are the Guru's Teachings. ||3||",
          },
          pu: {
            ss: {
              gurmukhi:
                'hy nwnk! gurU pwsoN auh mnu`K AijhI miq hwsl kr lYNdw hY ik aus dy swry AOgux guxW ivc smw jWdy hn [3[',
              unicode:
                'ਹੇ ਨਾਨਕ! ਗੁਰੂ ਪਾਸੋਂ ਉਹ ਮਨੁੱਖ ਅਜਿਹੀ ਮਤਿ ਹਾਸਲ ਕਰ ਲੈਂਦਾ ਹੈ ਕਿ ਉਸ ਦੇ ਸਾਰੇ ਔਗੁਣ ਗੁਣਾਂ ਵਿਚ ਸਮਾ ਜਾਂਦੇ ਹਨ ।੩।',
            },
            ft: {
              gurmukhi:
                'sRI gurU jI khqy hYN: AYsI gurmiq pweI hY ijs kr guxoN kr AOgux smwey gey hYN]',
              unicode:
                'ਸ੍ਰੀ ਗੁਰੂ ਜੀ ਕਹਤੇ ਹੈਂ: ਐਸੀ ਗੁਰਮਤਿ ਪਾਈ ਹੈ ਜਿਸ ਕਰ ਗੁਣੋਂ ਕਰ ਔਗੁਣ ਸਮਾਏ ਗਏ ਹੈਂ॥',
            },
            bdb: {
              gurmukhi:
                'hy nwnk! gurU pwsoN auh mnu`K AijhI miq hwsl kr lYNdw hY ik aus dy swry AOgux guxW ivc smw jWdy hn [3[',
              unicode:
                'ਹੇ ਨਾਨਕ! ਗੁਰੂ ਪਾਸੋਂ ਉਹ ਮਨੁੱਖ ਅਜਿਹੀ ਮਤਿ ਹਾਸਲ ਕਰ ਲੈਂਦਾ ਹੈ ਕਿ ਉਸ ਦੇ ਸਾਰੇ ਔਗੁਣ ਗੁਣਾਂ ਵਿਚ ਸਮਾ ਜਾਂਦੇ ਹਨ ।੩।',
            },
            ms: {
              gurmukhi:
                'nwnk bMdy dIAW bdIAW qd nykIAW AMdr lIn ho jWdIAW hn[ ieho ijhI smJ aus ƒ gurW pwso prwpq ho jWdI hY[',
              unicode:
                'ਨਾਨਕ ਬੰਦੇ ਦੀਆਂ ਬਦੀਆਂ ਤਦ ਨੇਕੀਆਂ ਅੰਦਰ ਲੀਨ ਹੋ ਜਾਂਦੀਆਂ ਹਨ। ਇਹੋ ਜਿਹੀ ਸਮਝ ਉਸ ਨੂੰ ਗੁਰਾਂ ਪਾਸੋ ਪਰਾਪਤ ਹੋ ਜਾਂਦੀ ਹੈ।',
            },
          },
          es: {
            sn: 'tal es la Sabiduría que uno logra del Guru. (3)',
          },
          hi: {
            ss: 'हे नानक ! गुरू से वह मनुष्य ऐसी मति हासिल कर लेता है कि उसके सारे अवगुण गुणों में समा जाते हैं। 3।',
            sts: 'गुरु नानक फुरमाते हैं कि ऐसी गुरु-शिक्षा प्राप्त की है कि अवगुण गुणों में लीन होकर दूर हो गए हैं।॥ ३॥',
          },
        },
        transliteration: {
          english: 'naanak avagan guneh samaane aaisee gurmat paiee ||3||',
          hindi: 'नानक अवगण गुणह समाणे ऐसी गुरमति पाई ॥३॥',
          en: 'naanak avagan guneh samaane aaisee gurmat paiee ||3||',
          hi: 'नानक अवगण गुणह समाणे ऐसी गुरमति पाई ॥३॥',
          ipa: 'nɑnək əʋəGəɳ Gʊɳəh səmɑɳe æsi Gʊrəmət̪ pɑei.3.',
          ur: 'نانک اوگݨ گُݨه سماݨے اَےسیِ گُرمت پاای ۔۔۳۔۔',
        },
        pageNo: 1111,
        lineNo: 7,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [
            {
              p: 3,
              t: 'v',
            },
            {
              p: 0,
              t: 'y',
            },
          ],
          igurbani: [
            {
              p: 3,
              t: 'v',
            },
            {
              p: 0,
              t: 'y',
            },
          ],
          sttm2: [
            {
              p: 0,
              t: 'v',
            },
            {
              p: 3,
              t: 'v',
            },
          ],
        },
      },
      {
        verseId: 47480,
        shabadId: 3993,
        verse: {
          gurmukhi: 'Awvx jwx rhy cUkw Bolw rwm ]',
          unicode: 'ਆਵਣ ਜਾਣ ਰਹੇ ਚੂਕਾ ਭੋਲਾ ਰਾਮ ॥',
        },
        larivaar: {
          gurmukhi: 'AwvxjwxrhycUkwBolwrwm]',
          unicode: 'ਆਵਣਜਾਣਰਹੇਚੂਕਾਭੋਲਾਰਾਮ॥',
        },
        translation: {
          en: {
            bdb: 'My coming and going in reincarnation have ended; doubt and hesitation are gone.',
            ms: 'My coming and going, have ended and my misgiving is removed.',
            ssk: 'My coming and going in reincarnation have ended; doubt and hesitation are gone.',
          },
          pu: {
            ss: {
              gurmukhi:
                'hy BweI! (ijnHW dy ihrdy-AwkwS ivc ‘qwrw ciVAw lMmw’, auhnW dy) jnm mrn dy gyV mu`k gey, auhnW dI koJI jIvn-cwl ^qm ho geI [',
              unicode:
                'ਹੇ ਭਾਈ! (ਜਿਨ੍ਹਾਂ ਦੇ ਹਿਰਦੇ-ਆਕਾਸ਼ ਵਿਚ ‘ਤਾਰਾ ਚੜਿਆ ਲੰਮਾ’, ਉਹਨਾਂ ਦੇ) ਜਨਮ ਮਰਨ ਦੇ ਗੇੜ ਮੁੱਕ ਗਏ, ਉਹਨਾਂ ਦੀ ਕੋਝੀ ਜੀਵਨ-ਚਾਲ ਖ਼ਤਮ ਹੋ ਗਈ ।',
            },
            ft: {
              gurmukhi:
                'hy BweI! vhu jnm mrn sy rihq hUey hYN AOr Bulwvw inibRq ho igAw hY]',
              unicode:
                'ਹੇ ਭਾਈ! ਵਹੁ ਜਨਮ ਮਰਨ ਸੇ ਰਹਿਤ ਹੂਏ ਹੈਂ ਔਰ ਭੁਲਾਵਾ ਨਿਬ੍ਰਿਤ ਹੋ ਗਿਆ ਹੈ॥',
            },
            bdb: {
              gurmukhi:
                'hy BweI! (ijnHW dy ihrdy-AwkwS ivc ‘qwrw ciVAw lMmw’, auhnW dy) jnm mrn dy gyV mu`k gey, auhnW dI koJI jIvn-cwl ^qm ho geI [',
              unicode:
                'ਹੇ ਭਾਈ! (ਜਿਨ੍ਹਾਂ ਦੇ ਹਿਰਦੇ-ਆਕਾਸ਼ ਵਿਚ ‘ਤਾਰਾ ਚੜਿਆ ਲੰਮਾ’, ਉਹਨਾਂ ਦੇ) ਜਨਮ ਮਰਨ ਦੇ ਗੇੜ ਮੁੱਕ ਗਏ, ਉਹਨਾਂ ਦੀ ਕੋਝੀ ਜੀਵਨ-ਚਾਲ ਖ਼ਤਮ ਹੋ ਗਈ ।',
            },
            ms: {
              gurmukhi:
                'myry Awaux Aqy jwx muk gey hn Aqy myrw BulyKw dUr ho igAw hY[',
              unicode:
                'ਮੇਰੇ ਆਉਣ ਅਤੇ ਜਾਣ ਮੁਕ ਗਏ ਹਨ ਅਤੇ ਮੇਰਾ ਭੁਲੇਖਾ ਦੂਰ ਹੋ ਗਿਆ ਹੈ।',
            },
          },
          es: {
            sn: 'Las idas y venidas cesan y la duda desaparece; sometiendo al ego negativo, ',
          },
          hi: {
            ss: "हे भाई ! (जिनके हृदय-आकाश में 'तारा चढ़िआ लंमा'। उनके) जनम-मरण के चक्कर समाप्त हो गए। उनकी कोझी जीवन-चाल खत्म हो गई।",
            sts: 'आवागमन मिट गया है और सब भ्रम निवृत्त हो गए हैं।',
          },
        },
        transliteration: {
          english: 'aavan jaan rahe chookaa bholaa raam ||',
          hindi: 'आवण जाण रहे चूका भोला राम ॥',
          en: 'aavan jaan rahe chookaa bholaa raam ||',
          hi: 'आवण जाण रहे चूका भोला राम ॥',
          ipa: 'əɑʋəɳ d͡ʒɑɳ rəhe t͡ʃukɑ ɓɔlɑ rɑm.',
          ur: 'آوݨ جاݨ رهے چُوکا بھولا رام ۔۔',
        },
        pageNo: 1111,
        lineNo: 7,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [
            {
              p: 2,
              t: 'v',
            },
            {
              p: 4,
              t: 'y',
            },
          ],
          igurbani: [
            {
              p: 2,
              t: 'v',
            },
            {
              p: 4,
              t: 'y',
            },
          ],
          sttm2: [
            {
              p: 2,
              t: 'v',
            },
          ],
        },
      },
      {
        verseId: 47481,
        shabadId: 3993,
        verse: {
          gurmukhi: 'haumY mwir imly swcw colw rwm ]',
          unicode: 'ਹਉਮੈ ਮਾਰਿ ਮਿਲੇ ਸਾਚਾ ਚੋਲਾ ਰਾਮ ॥',
        },
        larivaar: {
          gurmukhi: 'haumYmwirimlyswcwcolwrwm]',
          unicode: 'ਹਉਮੈਮਾਰਿਮਿਲੇਸਾਚਾਚੋਲਾਰਾਮ॥',
        },
        translation: {
          en: {
            bdb: 'Conquering my ego, I have met the True Lord, and now I wear the robe of Truth.',
            ms: 'Stilling my self-conceit I have met my Lord and now wear the apparel of Truth.',
            ssk: 'Conquering my ego, I have met the True Lord, and now I wear the robe of Truth.',
          },
          pu: {
            ss: {
              gurmukhi:
                'auh (Awpxy AMdroN) haumY dUr kr ky (pRBU-crnW ivc) juV gey, auhnW dw srIr (ivkwrW dy h`ilAW dy twkry qy) Afol ho igAw [',
              unicode:
                'ਉਹ (ਆਪਣੇ ਅੰਦਰੋਂ) ਹਉਮੈ ਦੂਰ ਕਰ ਕੇ (ਪ੍ਰਭੂ-ਚਰਨਾਂ ਵਿਚ) ਜੁੜ ਗਏ, ਉਹਨਾਂ ਦਾ ਸਰੀਰ (ਵਿਕਾਰਾਂ ਦੇ ਹੱਲਿਆਂ ਦੇ ਟਾਕਰੇ ਤੇ) ਅਡੋਲ ਹੋ ਗਿਆ ।',
            },
            ft: {
              gurmukhi:
                'hMqw mmqw ko mwr krky, hy BweI! hrI sy imly hYN AOr srIr rUp colw scw, Bwv sPl hUAw hY]',
              unicode:
                'ਹੰਤਾ ਮਮਤਾ ਕੋ ਮਾਰ ਕਰਕੇ, ਹੇ ਭਾਈ! ਹਰੀ ਸੇ ਮਿਲੇ ਹੈਂ ਔਰ ਸਰੀਰ ਰੂਪ ਚੋਲਾ ਸਚਾ, ਭਾਵ ਸਫਲ ਹੂਆ ਹੈ॥',
            },
            bdb: {
              gurmukhi:
                'auh (Awpxy AMdroN) haumY dUr kr ky (pRBU-crnW ivc) juV gey, auhnW dw srIr (ivkwrW dy h`ilAW dy twkry qy) Afol ho igAw [',
              unicode:
                'ਉਹ (ਆਪਣੇ ਅੰਦਰੋਂ) ਹਉਮੈ ਦੂਰ ਕਰ ਕੇ (ਪ੍ਰਭੂ-ਚਰਨਾਂ ਵਿਚ) ਜੁੜ ਗਏ, ਉਹਨਾਂ ਦਾ ਸਰੀਰ (ਵਿਕਾਰਾਂ ਦੇ ਹੱਲਿਆਂ ਦੇ ਟਾਕਰੇ ਤੇ) ਅਡੋਲ ਹੋ ਗਿਆ ।',
            },
            ms: {
              gurmukhi:
                'AwpxI svY-hMgqw ƒ mwr ky mYN Awpxy suAwmI ƒ iml peI hW qy hux s`c dw cogw pihndI hW[',
              unicode:
                'ਆਪਣੀ ਸਵੈ-ਹੰਗਤਾ ਨੂੰ ਮਾਰ ਕੇ ਮੈਂ ਆਪਣੇ ਸੁਆਮੀ ਨੂੰ ਮਿਲ ਪਈ ਹਾਂ ਤੇ ਹੁਣ ਸੱਚ ਦਾ ਚੋਗਾ ਪਹਿਨਦੀ ਹਾਂ।',
            },
          },
          es: {
            sn: 'uno obtiene la Investidura de la Verdad. ',
          },
          hi: {
            ss: 'वह (अपने अंदर से) अहंकार दूर करके (प्रभू चरणों में) जुड़ गए। उनका शरीर (विकारों के हमलों के मुकाबले के लिए) अडोल हो गया।',
            sts: 'अहम्-भाव को मिटाकर मिलन हुआ तो शरीर सफल हो गया।',
          },
        },
        transliteration: {
          english: 'haumai maar mile saachaa cholaa raam ||',
          hindi: 'हउमै मारि मिले साचा चोला राम ॥',
          en: 'haumai maar mile saachaa cholaa raam ||',
          hi: 'हउमै मारि मिले साचा चोला राम ॥',
          ipa: 'hoʊmæ mɑr mɪle sɑt͡ʃɑ t͡ʃɔlɑ rɑm.',
          ur: 'هامَے مار ملے ساچا چولا رام ۔۔',
        },
        pageNo: 1111,
        lineNo: 8,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [
            {
              p: 2,
              t: 'v',
            },
          ],
          igurbani: [
            {
              p: 2,
              t: 'v',
            },
          ],
          sttm2: [
            {
              p: 2,
              t: 'v',
            },
          ],
        },
      },
      {
        verseId: 47482,
        shabadId: 3993,
        verse: {
          gurmukhi: 'haumY guir KoeI prgtu hoeI cUky sog sMqwpY ]',
          unicode: 'ਹਉਮੈ ਗੁਰਿ ਖੋਈ ਪਰਗਟੁ ਹੋਈ ਚੂਕੇ ਸੋਗ ਸੰਤਾਪੈ ॥',
        },
        larivaar: {
          gurmukhi: 'haumYguirKoeIprgtuhoeIcUkysogsMqwpY]',
          unicode: 'ਹਉਮੈਗੁਰਿਖੋਈਪਰਗਟੁਹੋਈਚੂਕੇਸੋਗਸੰਤਾਪੈ॥',
        },
        translation: {
          en: {
            bdb: 'The Guru has rid me of egotism; my sorrow and suffering are dispelled.',
            ms: 'The Guru has rid me of ego, I have become renowned and my sorrows and sufferings are dispelled.',
            ssk: 'The Guru has rid me of egotism; my sorrow and suffering are dispelled.',
          },
          pu: {
            ss: {
              gurmukhi:
                'hy BweI! gurU ny ijs jIv-iesq®I dI haumY dUr kr id`qI, auh (lok prlok ivc) soBw vwlI ho geI, aus dy swry Zm swry du`K-klyS mu`k gey [',
              unicode:
                'ਹੇ ਭਾਈ! ਗੁਰੂ ਨੇ ਜਿਸ ਜੀਵ-ਇਸਤ੍ਰੀ ਦੀ ਹਉਮੈ ਦੂਰ ਕਰ ਦਿੱਤੀ, ਉਹ (ਲੋਕ ਪਰਲੋਕ ਵਿਚ) ਸੋਭਾ ਵਾਲੀ ਹੋ ਗਈ, ਉਸ ਦੇ ਸਾਰੇ ਗ਼ਮ ਸਾਰੇ ਦੁੱਖ-ਕਲੇਸ਼ ਮੁੱਕ ਗਏ ।',
            },
            ft: {
              gurmukhi:
                'hMqw mmqw guroN ny KoeI hY AO soBw pRgt BeI hY, sog, sMqwp sB inibRq hUey hYN]',
              unicode:
                'ਹੰਤਾ ਮਮਤਾ ਗੁਰੋਂ ਨੇ ਖੋਈ ਹੈ ਔ ਸੋਭਾ ਪ੍ਰਗਟ ਭਈ ਹੈ, ਸੋਗ, ਸੰਤਾਪ ਸਭ ਨਿਬ੍ਰਿਤ ਹੂਏ ਹੈਂ॥',
            },
            bdb: {
              gurmukhi:
                'hy BweI! gurU ny ijs jIv-iesq®I dI haumY dUr kr id`qI, auh (lok prlok ivc) soBw vwlI ho geI, aus dy swry Zm swry du`K-klyS mu`k gey [',
              unicode:
                'ਹੇ ਭਾਈ! ਗੁਰੂ ਨੇ ਜਿਸ ਜੀਵ-ਇਸਤ੍ਰੀ ਦੀ ਹਉਮੈ ਦੂਰ ਕਰ ਦਿੱਤੀ, ਉਹ (ਲੋਕ ਪਰਲੋਕ ਵਿਚ) ਸੋਭਾ ਵਾਲੀ ਹੋ ਗਈ, ਉਸ ਦੇ ਸਾਰੇ ਗ਼ਮ ਸਾਰੇ ਦੁੱਖ-ਕਲੇਸ਼ ਮੁੱਕ ਗਏ ।',
            },
            ms: {
              gurmukhi:
                'gurW ny myrI hMgqw nivrq kr id`qI hY, mYN pRis`D ho geI hW Aqy myry Sok qy duKVy dUr ho gey hn[',
              unicode:
                'ਗੁਰਾਂ ਨੇ ਮੇਰੀ ਹੰਗਤਾ ਨਵਿਰਤ ਕਰ ਦਿੱਤੀ ਹੈ, ਮੈਂ ਪ੍ਰਸਿੱਧ ਹੋ ਗਈ ਹਾਂ ਅਤੇ ਮੇਰੇ ਸ਼ੋਕ ਤੇ ਦੁਖੜੇ ਦੂਰ ਹੋ ਗਏ ਹਨ।',
            },
          },
          es: {
            sn: 'Los sufrimientos y aflicciones son erradicados y uno se libera del ego negativo, por la Gracia del Guru.',
          },
          hi: {
            ss: 'हे भाई ! गुरू ने जिस जीव-स्त्री का अहंकार दूर कर दिया। वह (लोक-परलोक में) शोभा वाली हो गई। उसके सारे ग़म सारे दुख-कलेश समाप्त हो गए।',
            sts: 'गुरु ने अहम्-भाव को निवृत किया तो वह प्रगट हो गया और शोक-संताप निवृत्त हो गए।',
          },
        },
        transliteration: {
          english: 'haumai gur khoiee paragaT hoiee chooke sog sa(n)taapai ||',
          hindi: 'हउमै गुरि खोई परगटु होई चूके सोग संतापै ॥',
          en: 'haumai gur khoiee paragaT hoiee chooke sog sa(n)taapai ||',
          hi: 'हउमै गुरि खोई परगटु होई चूके सोग संतापै ॥',
          ipa: 'hoʊmæ Gʊr kʰɔei pərəGəʈ hɔei t͡ʃuke sɔG səŋt̪ɑpæ.',
          ur: 'هامَے گُر کھوای پرگٹ هوای چُوکے سوگ سںتاپَے ۔۔',
        },
        pageNo: 1111,
        lineNo: 8,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [
            {
              p: 4,
              t: 'v',
            },
            {
              p: 2,
              t: 'y',
            },
          ],
          igurbani: [
            {
              p: 4,
              t: 'v',
            },
            {
              p: 2,
              t: 'y',
            },
          ],
          sttm2: [
            {
              p: 4,
              t: 'v',
            },
          ],
        },
      },
      {
        verseId: 47483,
        shabadId: 3993,
        verse: {
          gurmukhi: 'joqI AMdir joiq smwxI Awpu pCwqw AwpY ]',
          unicode: 'ਜੋਤੀ ਅੰਦਰਿ ਜੋਤਿ ਸਮਾਣੀ ਆਪੁ ਪਛਾਤਾ ਆਪੈ ॥',
        },
        larivaar: {
          gurmukhi: 'joqIAMdirjoiqsmwxIAwpupCwqwAwpY]',
          unicode: 'ਜੋਤੀਅੰਦਰਿਜੋਤਿਸਮਾਣੀਆਪੁਪਛਾਤਾਆਪੈ॥',
        },
        translation: {
          en: {
            bdb: 'My light merges into the Light; I realize and understand my own self.',
            ms: 'My light is merged in the supreme Light and I have recognised my ownself.',
            ssk: 'My might merges into the Light; I realize and understand my own self.',
          },
          pu: {
            ss: {
              gurmukhi:
                'aus dI ijMd prmwqmw dI joiq ivc imlI rihMdI hY, auh Awpxy Awqmk jIvn dI sdw pVqwl krdI rihMdI hY [',
              unicode:
                'ਉਸ ਦੀ ਜਿੰਦ ਪਰਮਾਤਮਾ ਦੀ ਜੋਤਿ ਵਿਚ ਮਿਲੀ ਰਹਿੰਦੀ ਹੈ, ਉਹ ਆਪਣੇ ਆਤਮਕ ਜੀਵਨ ਦੀ ਸਦਾ ਪੜਤਾਲ ਕਰਦੀ ਰਹਿੰਦੀ ਹੈ ।',
            },
            ft: {
              gurmukhi:
                'joqI kI irdy AMqr gÎwq vw (joqI) vwihgurU myN joiq smweI hY AOr iqs ko Apxy Awp pCwx lIAw hY]',
              unicode:
                'ਜੋਤੀ ਕੀ ਰਿਦੇ ਅੰਤਰ ਗ੍ਯਾਤ ਵਾ (ਜੋਤੀ) ਵਾਹਿਗੁਰੂ ਮੇਂ ਜੋਤਿ ਸਮਾਈ ਹੈ ਔਰ ਤਿਸ ਕੋ ਅਪਣੇ ਆਪ ਪਛਾਣ ਲੀਆ ਹੈ॥',
            },
            bdb: {
              gurmukhi:
                'aus dI ijMd prmwqmw dI joiq ivc imlI rihMdI hY, auh Awpxy Awqmk jIvn dI sdw pVqwl krdI rihMdI hY [',
              unicode:
                'ਉਸ ਦੀ ਜਿੰਦ ਪਰਮਾਤਮਾ ਦੀ ਜੋਤਿ ਵਿਚ ਮਿਲੀ ਰਹਿੰਦੀ ਹੈ, ਉਹ ਆਪਣੇ ਆਤਮਕ ਜੀਵਨ ਦੀ ਸਦਾ ਪੜਤਾਲ ਕਰਦੀ ਰਹਿੰਦੀ ਹੈ ।',
            },
            ms: {
              gurmukhi:
                'myrw pRkwS prm pRkwS iv`c lIn ho igAw hY Aqy mYN Awpxy Awp ƒ iswx ilAw hY[',
              unicode:
                'ਮੇਰਾ ਪ੍ਰਕਾਸ਼ ਪਰਮ ਪ੍ਰਕਾਸ਼ ਵਿੱਚ ਲੀਨ ਹੋ ਗਿਆ ਹੈ ਅਤੇ ਮੈਂ ਆਪਣੇ ਆਪ ਨੂੰ ਸਿਾਣ ਲਿਆ ਹੈ।',
            },
          },
          es: {
            sn: 'El Alma se inmerge en el Alma Universal y uno conoce el ser interior a través del Ser Universal.',
          },
          hi: {
            ss: 'उसकी जिंद परमात्मा की ज्योति में मिली रहती है। वह अपने आत्मिक जीवन की सदा पड़ताल करती रहती है।',
            sts: 'अपने आप को पहचानकर आत्म-ज्योति ब्रह्म-ज्योति में विलीन हो गई।',
          },
        },
        transliteration: {
          english: 'jotee a(n)dhar jot samaanee aap pachhaataa aapai ||',
          hindi: 'जोती अंदरि जोति समाणी आपु पछाता आपै ॥',
          en: 'jotee a(n)dhar jot samaanee aap pachhaataa aapai ||',
          hi: 'जोती अंदरि जोति समाणी आपु पछाता आपै ॥',
          ipa: 'd͡ʒɔt̪i əŋd̪ər d͡ʒɔt̪ səmɑɳi əɑp pəɕɑt̪ɑ əɑpæ.',
          ur: 'جوتیِ اںدر جوت سماݨیِ آپ پچھاتا آپَے ۔۔',
        },
        pageNo: 1111,
        lineNo: 8,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [
            {
              p: 3,
              t: 'v',
            },
          ],
          igurbani: [
            {
              p: 3,
              t: 'v',
            },
          ],
          sttm2: [
            {
              p: 3,
              t: 'v',
            },
          ],
        },
      },
      {
        verseId: 47484,
        shabadId: 3993,
        verse: {
          gurmukhi: 'pyeIAVY Gir sbid pqIxI swhurVY ipr BwxI ]',
          unicode: 'ਪੇਈਅੜੈ ਘਰਿ ਸਬਦਿ ਪਤੀਣੀ ਸਾਹੁਰੜੈ ਪਿਰ ਭਾਣੀ ॥',
        },
        larivaar: {
          gurmukhi: 'pyeIAVYGirsbidpqIxIswhurVYiprBwxI]',
          unicode: 'ਪੇਈਅੜੈਘਰਿਸਬਦਿਪਤੀਣੀਸਾਹੁਰੜੈਪਿਰਭਾਣੀ॥',
        },
        translation: {
          en: {
            bdb: "In this world of my parents' home, I am satisfied with the Shabad; at my in-laws' home, in the world beyond, I shall be pleasing to my Husband Lord.",
            ms: 'At the parents, I am propitiated with the Name, so at my in-laws I shall be pleasing to my Spouse.',
            ssk: "In this world of my parents' home, I am satisfied with the Shabad; at my in-laws' home, in the world beyond, I shall be pleasing to my Husband Lord.",
          },
          pu: {
            ss: {
              gurmukhi:
                'hy BweI! ijhVI jIv-iesq®I ies lok ivc gurU dy Sbd ivc prcI rihMdI hY, auh prlok ivc (jw ky) pRBU-pqI ƒ Bw jWdI hY [',
              unicode:
                'ਹੇ ਭਾਈ! ਜਿਹੜੀ ਜੀਵ-ਇਸਤ੍ਰੀ ਇਸ ਲੋਕ ਵਿਚ ਗੁਰੂ ਦੇ ਸ਼ਬਦ ਵਿਚ ਪਰਚੀ ਰਹਿੰਦੀ ਹੈ, ਉਹ ਪਰਲੋਕ ਵਿਚ (ਜਾ ਕੇ) ਪ੍ਰਭੂ-ਪਤੀ ਨੂੰ ਭਾ ਜਾਂਦੀ ਹੈ ।',
            },
            ft: {
              gurmukhi:
                'jo ies lok myN gur sbd kr pqIAweI hY AO (swhurVY) pRlok myN BI pqI ko BweI hY]',
              unicode:
                'ਜੋ ਇਸ ਲੋਕ ਮੇਂ ਗੁਰ ਸਬਦ ਕਰ ਪਤੀਆਈ ਹੈ ਔ (ਸਾਹੁਰੜੈ) ਪ੍ਰਲੋਕ ਮੇਂ ਭੀ ਪਤੀ ਕੋ ਭਾਈ ਹੈ॥',
            },
            bdb: {
              gurmukhi:
                'hy BweI! ijhVI jIv-iesq®I ies lok ivc gurU dy Sbd ivc prcI rihMdI hY, auh prlok ivc (jw ky) pRBU-pqI ƒ Bw jWdI hY [',
              unicode:
                'ਹੇ ਭਾਈ! ਜਿਹੜੀ ਜੀਵ-ਇਸਤ੍ਰੀ ਇਸ ਲੋਕ ਵਿਚ ਗੁਰੂ ਦੇ ਸ਼ਬਦ ਵਿਚ ਪਰਚੀ ਰਹਿੰਦੀ ਹੈ, ਉਹ ਪਰਲੋਕ ਵਿਚ (ਜਾ ਕੇ) ਪ੍ਰਭੂ-ਪਤੀ ਨੂੰ ਭਾ ਜਾਂਦੀ ਹੈ ।',
            },
            ms: {
              gurmukhi:
                'pykI mYN nwm nwl sMquSt ho geI hW ies leI shurI mYN Awpxy pqI ƒ cMgI lgwgI[',
              unicode:
                'ਪੇਕੀ ਮੈਂ ਨਾਮ ਨਾਲ ਸੰਤੁਸ਼ਟ ਹੋ ਗਈ ਹਾਂ ਇਸ ਲਈ ਸਹੁਰੀ ਮੈਂ ਆਪਣੇ ਪਤੀ ਨੂੰ ਚੰਗੀ ਲਗਾਗੀ।',
            },
          },
          es: {
            sn: 'En la casa de los padres, la novia se inmerge en la Palabra y en la casa de los suegros de ella, el Consorte le ofrece Su Amor.',
          },
          hi: {
            ss: 'हे भाई ! जो जीव-स्त्री इस लोक में गुरू के शबद में जुड़ी रहती है। वह परलोक में (जा के) प्रभू-पति को भा जाती है।',
            sts: 'जीव इहलोक में शब्द-गुरु द्वारा आचरण करता है और परलोक में पति-प्रभु के संग रहता है।',
          },
        },
        transliteration: {
          english: 'peieeaRai ghar sabadh pateenee saahuraRai pir bhaanee ||',
          hindi: 'पेईअड़ै घरि सबदि पतीणी साहुरड़ै पिर भाणी ॥',
          en: 'peieeaRai ghar sabadh pateenee saahuraRai pir bhaanee ||',
          hi: 'पेईअड़ै घरि सबदि पतीणी साहुरड़ै पिर भाणी ॥',
          ipa: 'peeiɽæ Gʰər səbəd̪ pət̪iɳi sɑhʊrəɽæ pɪr ɓɑɳi.',
          ur: 'پےایاڑَے گھر سبد پتیِݨیِ ساهُرڑَے پر بھاݨیِ ۔۔',
        },
        pageNo: 1111,
        lineNo: 9,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [
            {
              p: 3,
              t: 'v',
            },
          ],
          igurbani: [
            {
              p: 3,
              t: 'v',
            },
          ],
          sttm2: [
            {
              p: 3,
              t: 'v',
            },
          ],
        },
      },
      {
        verseId: 47485,
        shabadId: 3993,
        verse: {
          gurmukhi: 'nwnk siqguir myil imlweI cUkI kwix lokwxI ]4]3]',
          unicode: 'ਨਾਨਕ ਸਤਿਗੁਰਿ ਮੇਲਿ ਮਿਲਾਈ ਚੂਕੀ ਕਾਣਿ ਲੋਕਾਣੀ ॥੪॥੩॥',
        },
        larivaar: {
          gurmukhi: 'nwnksiqguirmyilimlweIcUkIkwixlokwxI]4]3]',
          unicode: 'ਨਾਨਕਸਤਿਗੁਰਿਮੇਲਿਮਿਲਾਈਚੂਕੀਕਾਣਿਲੋਕਾਣੀ॥੪॥੩॥',
        },
        translation: {
          en: {
            bdb: 'O Nanak, the True Guru has united me in His Union; my dependence on people has ended. ||4||3||',
            ms: "Nanak, the True Guru has united me in the Lord's union and my subservience of people is ended.",
            ssk: 'O Nanak, the True Guru has united me in His Union; my dependence on people has ended. ||4||3||',
          },
          pu: {
            ss: {
              gurmukhi:
                'hy nwnk! ijs jIv-iesq®I ƒ gurU ny (Awpxy Sbd ivc) joV ky pRBU nwl imlw id`qw, aus ƒ dunIAw dI muQwjI nhIN rih jWdI [4[3[',
              unicode:
                'ਹੇ ਨਾਨਕ! ਜਿਸ ਜੀਵ-ਇਸਤ੍ਰੀ ਨੂੰ ਗੁਰੂ ਨੇ (ਆਪਣੇ ਸ਼ਬਦ ਵਿਚ) ਜੋੜ ਕੇ ਪ੍ਰਭੂ ਨਾਲ ਮਿਲਾ ਦਿੱਤਾ, ਉਸ ਨੂੰ ਦੁਨੀਆ ਦੀ ਮੁਥਾਜੀ ਨਹੀਂ ਰਹਿ ਜਾਂਦੀ ।੪।੩।',
            },
            ft: {
              gurmukhi:
                'sRI gurU jI khqy hYN: siqgurU imly iqn guroN ny hir ky myl myN imlweI hY AOr lokoN kI knof sB cuk geI hY]4]3]ÇmnmuKoN kw hwlu khqy hYN:',
              unicode:
                'ਸ੍ਰੀ ਗੁਰੂ ਜੀ ਕਹਤੇ ਹੈਂ: ਸਤਿਗੁਰੂ ਮਿਲੇ ਤਿਨ ਗੁਰੋਂ ਨੇ ਹਰਿ ਕੇ ਮੇਲ ਮੇਂ ਮਿਲਾਈ ਹੈ ਔਰ ਲੋਕੋਂ ਕੀ ਕਨੋਡ ਸਭ ਚੁਕ ਗਈ ਹੈ॥੪॥੩॥☬ਮਨਮੁਖੋਂ ਕਾ ਹਾਲੁ ਕਹਤੇ ਹੈਂ:',
            },
            bdb: {
              gurmukhi:
                'hy nwnk! ijs jIv-iesq®I ƒ gurU ny (Awpxy Sbd ivc) joV ky pRBU nwl imlw id`qw, aus ƒ dunIAw dI muQwjI nhIN rih jWdI [4[3[',
              unicode:
                'ਹੇ ਨਾਨਕ! ਜਿਸ ਜੀਵ-ਇਸਤ੍ਰੀ ਨੂੰ ਗੁਰੂ ਨੇ (ਆਪਣੇ ਸ਼ਬਦ ਵਿਚ) ਜੋੜ ਕੇ ਪ੍ਰਭੂ ਨਾਲ ਮਿਲਾ ਦਿੱਤਾ, ਉਸ ਨੂੰ ਦੁਨੀਆ ਦੀ ਮੁਥਾਜੀ ਨਹੀਂ ਰਹਿ ਜਾਂਦੀ ।੪।੩।',
            },
            ms: {
              gurmukhi:
                'nwnk, s¤cy gurW ny mYƒ suAwmI dy imlwp AMdr imlw idqw hY Aqy muk geI hY, myrI lokw dI muCMdgI[',
              unicode:
                'ਨਾਨਕ, ਸੱਚੇ ਗੁਰਾਂ ਨੇ ਮੈਨੂੰ ਸੁਆਮੀ ਦੇ ਮਿਲਾਪ ਅੰਦਰ ਮਿਲਾ ਦਿਤਾ ਹੈ ਅਤੇ ਮੁਕ ਗਈ ਹੈ, ਮੇਰੀ ਲੋਕਾ ਦੀ ਮੁਛੰਦਗੀ।',
            },
          },
          es: {
            sn: 'Dice Nanak, a través del Guru se da la Unión con Dios y ella deja de apoyarse en lo mundano. (4-3)',
          },
          hi: {
            ss: 'हे नानक ! जिस जीव-स्त्री को गुरू ने (अपने शबद में) जोड़ के प्रभू के साथ मिला दिया। उसको दुनिया की मुथाजी नहीं रह जाती। 4। 3।',
            sts: 'गुरु नानक फुरमाते हैं कि सतगुरु ने जिसे प्रभु से मिला दिया है, उसकी संसार से निर्भरता दूर हो गई है॥ ४॥ ३॥',
          },
        },
        transliteration: {
          english: 'naanak satigur mel milaiee chookee kaan lokaanee ||4||3||',
          hindi: 'नानक सतिगुरि मेलि मिलाई चूकी काणि लोकाणी ॥४॥३॥',
          en: 'naanak satigur mel milaiee chookee kaan lokaanee ||4||3||',
          hi: 'नानक सतिगुरि मेलि मिलाई चूकी काणि लोकाणी ॥४॥३॥',
          ipa: 'nɑnək sət̪ɪGʊr mel mɪlɑei t͡ʃuki kɑɳ lɔkɑɳi.4.3.',
          ur: 'نانک ستگر مےل ملاای چُوکیِ کاݨ لوکاݨیِ ۔۔۴۔۔۳۔۔',
        },
        pageNo: 1111,
        lineNo: 9,
        updated: '2022-12-24 02:22:37',
        visraam: {
          sttm: [
            {
              p: 3,
              t: 'v',
            },
            {
              p: 0,
              t: 'y',
            },
          ],
          igurbani: [
            {
              p: 3,
              t: 'v',
            },
            {
              p: 0,
              t: 'y',
            },
          ],
          sttm2: [
            {
              p: 0,
              t: 'v',
            },
            {
              p: 3,
              t: 'v',
            },
          ],
        },
      },
    ],
  };

  transliteration: Translit = null;

  ngOnInit(): void {
    this.shabad = this.hukamnamaService.shabad;
    if (!this.shabad) {
      this.router.navigateByUrl('/');
    }
    if (this.shabad?.verses[0].transliteration.en) {
      this.transliteration = 'en';
    } else if (this.shabad?.verses[0].transliteration.english) {
      this.transliteration = 'english';
    }
  }
}
