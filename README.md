# 📝 Домашнее задание

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bc0dc4cf-26be-4e41-9204-8e5e67984152/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bc0dc4cf-26be-4e41-9204-8e5e67984152/Untitled.png)

Необходимо самому написать на React + Redux следующее приложение:

**Демо:** [https://order-form-three.vercel.app/](https://order-form-three.vercel.app/)

Простая форма создания заказа (не суть важно чего). Необходимо сохранить значения из всех шагов в Redux и вывести в итоговом результате всю информацию.

При нажатии на "**Оплатить**", необходимо отправлять запрос на сервер и сохранять заказ. Для этого, отправляй запрос на этот адрес [`https://5c3755177820ff0014d92711.mockapi.io/orders`](https://5c3755177820ff0014d92711.mockapi.io/orders)

**Главная задача** - сделать точно такой же функционал, как в этом демо. Вёрстка на твоё усмотрение.

Для того, чтобы использовать такую же стилизацию, как в этой демке, используй библиотеку Material UI - [https://material-ui.com/](https://material-ui.com/)

Красным помечено задание, которые необходимо выполнить, второе по желанию.

### Структура проекта:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3f8cc6c9-ee14-4c9d-b714-8bc4a077fe41/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3f8cc6c9-ee14-4c9d-b714-8bc4a077fe41/Untitled.png)

### 1. Отправлять запрос через Redux

Недостаточно просто создать внутри компонента функцию, которая будет будет отправлять запрос в Mockapi. Необходимо отправлять action в редакс, который будет асинхронно отправлять запрос на сервер на сохранение этого заказа.

Отправляемый JSON должен быть следующие вида:

```json
formData: {
  firstName: '',
  lastName: '',
  city: '',
  country: '',
  phone: '',
  deliveryMethod: '',
  paymentMethod: '',
}
```

### 2. Разбить экшен и редюсер

Для более грамотного структурирования проекта, создай папку `redux` и помести туда, как минимум, два файла: `actions.js` и `reducer.js`

`reducer.js` - в этом файле хранить только сам редюсер и `inistalState`.

`actions.js` - в нём будут храниться все экшены, которые потом можно переиспользовать. И вместо того, чтобы каждый раз помещать в `dispatch` новый объект, просто используй эти функции, который создают тебе экшн-объект.

Пример ниже:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/19080981-ec1b-4935-ae33-143637ff8c99/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/19080981-ec1b-4935-ae33-143637ff8c99/Untitled.png)

### 2. Подключить валидацию для форм (опционально)

Для этого используй библиотеку react-hook-form или Formik.
