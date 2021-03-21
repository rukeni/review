import dayjs from 'dayjs';

export const getTitleAboutTheHour = () => {
  const currentHour = dayjs().get('hour');

  switch (currentHour) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return '이 새벽에 어쩐일이 신가요?'
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      return '좋은 아침 입니다.'
    case 12:
    case 13:
    case 14:
      return '점심 식사 맛있게 하셨나요?'
    case 15:
    case 16:
    case 17:
      return '가장 열정적이기도, 졸립기도 한 시간입니다.'
    case 18:
    case 19:
    case 20:
      return '오늘 하루도 수고 하셨습니다.'
    case 21:
    case 22:
    case 23:
    case 0:
      return '오늘 하루를 잘 마무리하고 계신가요?'
    default:
      return '테스트'
  }
}