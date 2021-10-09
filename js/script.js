let noInfo = 'Жаль, что Вы не захотели ввести свой(ю)';
let year = prompt('Введите свой год рождения:');
switch (year) {
    case null:
        year = noInfo + ' ' + 'год рождения';
        alert(year);
        break;
    default: 
        if (year) {
            age = 2021 - year;
            let town = prompt('Введите свой город:');
            switch (town) {
                case null:
                    town = noInfo + ' ' + 'город';
                    alert(town);
                    break;
                case 'Киев':
                    town = 'Ты живешь в столице Украины';
                    break;
                case 'Москва':
                    town = 'Ты живешь в столице России';
                    break;
                case 'Минск':
                    town = 'Ты живешь в столице Беларуссии';
                    break;
                default:
                    town = 'Ты живешь в городе'+' '+ town;
            }
                let hobby = prompt('Какой ваш любимый вид спорта?');
                switch (hobby) {
                    case null:
                        hobby = noInfo + 'любимый вид спорта';
                        alert(hobby);
                        break;
                    case 'плавание':
                        hobby = 'Круто! Хочешь стать Майклом?';
                        break;
                    case 'гребля':
                        hobby = 'Круто! Хочешь стать Сергеем?';
                        break;
                    case 'бокс':
                        hobby = 'Круто! Хочешь стать Александром?';
                        break;
                    default:
                        hobby = 'Любимый вид спорта' + ' ' + hobby;
                }
            alert('Твой возраст'+ age + '\n'+ town + '\n'+ hobby);
            
        }
}
