# Application: Pets Corner 

### Pets Corner is an appointment & vaccination tracker and social media application dedicated to assist pet parents to take care of their pets while stay connected with other parents.  The application's mission is to keep track of pets' appointment and vaccinations and provide parents a platform to share infomations and tips to the pet community. 

# Features at a Glance

Secured Information for your pets: Pets Corner allows you to input your pet's information during sign up and securely store pet's data with bcrypt hashing and authenticated access sessions.

Appointment tracker: Users will be able to add and delete appointments with detail infomations such as appointment type, date, time and location.

Vaccination tracker: Users will be able to add, update, and delete vaccinations infomations such as last vaccinated date and next due date.

Chatroom: User can post live chat to chatroom to share or ask helpful pet infomation to the community.

# Getting Started with Pets Corner

1. Use tap to change between homepage, login page, and signup page. Login to user account to see user interface.

   ![login](/img/loginpc.gif)

2. Add/Delete appointments.

   ![appt](/img/apppc.gif)

3. Add/Delete/Update Vaccination.

   ![vcc](/client/assets/image/add.gif)

4. Staying Informed with Alerts
   Kafka NightOwl's AlertManager integration empowers you to stay ahead of critical issues. Whenever an anomaly or error is detected, an alert will be triggered. You can acknowledge and manage these alerts directly from the application.

   ![alert](/client/assets/image/alert.gif)

# Setup for new Kafka/Prometheus user

1. Setting up Kafka by following Apache Kafka Quickstart tutorial: [Apache Kafka Quickstart](https://kafka.apache.org/quickstart)
2. Configure JMX Exporter for Kafka

- Download the JMX Exporter jar file [Here](https://github.com/prometheus/jmx_exporter)
- Configure the JMX exporter configuration file for Kafka (example configuration files can be found [Here](https://github.com/prometheus/jmx_exporter/tree/main/example_configs))
- CD to your Kafka directory
- Run

```
java -jar jmx_prometheus_httpserver-0.19.0.jar <port number> <exporter-config-file-path>
```

to expose your metrics at localhost:[port number]/metrics

- Run

```
export KAFKA_OPTS="-javaagent:/<exporter-jar-file-path>/jmx_prometheus_javaagent-0.19.0.jar=<port number>:/<kafka-yml-file-path>/kafka-2_0_0.yml"
```

- Start your Kafka server

3. Setting up Prometheus by following: [Prometheus Tutorial](https://jhooq.com/prometheous-grafan-setup/)
4. Configure the prometheus.yml file as shown in /setup/prometheus
5. Download and Setup AlertManager from [Prometheus](https://prometheus.io/download/)
6. Configure the alertManager.yml file as shown in /setup/prometheus

# Tech Stack

<div align='center'>

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Node](https://img.shields.io/badge/-node-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/express-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Prometheus](https://img.shields.io/badge/Prometheus-E7532D?style=for-the-badge&logo=prometheus&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Apache Kafka](https://img.shields.io/badge/apache%20kafka-%2320232a.svg?style=for-the-badge&logo=apachekafka&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)
![Testing Library](https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red)

</div>

# Contributors

|  Developed By  |                                                                       Github                                                                       |                                                                           LinkedIn                                                                            |
| :------------: | :------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  Kelvin Chen   |    [![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kc-code32)    | [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jianming-kelvin-chen-b22191105/) |
| Jeremy Holland |    [![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/PecheKeen)    |           [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jerholland/)           |
|    Paul Kim    | [![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/paulkimofficial) |       [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/paul-kim-37735b217/)       |
| Carlos Revilla |  [![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/carlosfrev123)  |         [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/carlosfrevilla/)         |
| Colin Silvers  |  [![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ColinSilvers)   |          [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/colinsilvers/)          |

# License

This project is licensed under the [**MIT License**](https://choosealicense.com/licenses/mit/)
