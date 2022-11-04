#  AGISIT - Capstone Project Manual

## Authors

- David Pissarra (*ist192448*)

- Henrique Cavaco (*ist192475*)

- Rafael Gonçalves (*ist192544*)

- Valentim Romão (*ist193760*)

## Project Description

Our project consists of a simple calculator web application composed by the four basic operations (addition, subtraction, multiplication and division). We used VM instances since they provide better isolation properties than containers.

**Presentation Video:** https://youtu.be/6UHP2xfFyMo

## Launch Management Node

In order to launch the project management node, the vagrant file path need to be defined. As a result, the selected vagrant file will be run when running the command vagrant up. Finally, the management node can be accessed by ssh.

```
export VAGRANT_VAGRANTFILE="Vagrantfile.project"
vagrant up
vagrant ssh
```

To allow the communication between the management node and the deployed infrastructure, a RSA keypair need to be created.

```
ssh-keygen -t rsa -b 4096
```

## Infrastructure Deployment and Provision

**IMPORTANT**: If you are running the code in a project other than the one we provided, you will need to enable some APIs/services in GCP. For this, enter your project dashboard, navigate to APIs & Services → Enabled APIs & Services, click Enable APIs & Services and there search for Compute Engine API and Google Cloud Memorystore for Redis API; enable both of these and you are good to go.

After having the terraform files all set, all the plugins should be installed (terraform init), a plan must be scheduled (terraform plan), in order to be able to apply/allocate the intended resources for the infrastructure (terraform apply).

```
terraform init
terraform plan
terraform apply
```

After the creation of the VM instances, the hosts file need to be configured with the machine IPs. After that the playbooks can finally be run.

```
ansible-playbook ansible-gcp-servers-setup-all.yml
ansible-playbook monitoring_config.yml
```

GCP must show the following VM instances:

![](https://cdn.discordapp.com/attachments/1023993625140543510/1038054813562327150/gcp.png "GCP VM instances")

## Endpoints

App frontend:

```
<load-balancer-ip>
```

Prometheus:

```
<load-balancer-ip>:9090
```

![](https://cdn.discordapp.com/attachments/1023993625140543510/1038054814522822666/prometheus.png "Prometheus page")

Grafana:

```
<load-balancer-ip>:3000
```

![](https://cdn.discordapp.com/attachments/1023993625140543510/1038054813855924274/grafana.png "Grafana page")

HAProxy Statistics (Load Balancing stats):

```
<load-balancer-ip>:3000/haproxy?stats
```

![](https://cdn.discordapp.com/attachments/1023993625140543510/1038054814208237589/haproxy.png "HAProxy Stats page")

## Conclude Experiments

After all experiments with the infrastructure, we precede destroying the allocated resources as follows:

```
terraform destroy
```

In order to exit and destroy the created management node:

```
exit
vagrant destroy
```