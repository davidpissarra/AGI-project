#  AGISIT - Capstone Project Manual

## Authors

- David Pissarra (*ist192448*)

- Henrique Cavaco (*ist192475*)

- Rafael Gonçalves (*ist192544*)

- Valentim Romão (*ist193760*)

## Project Description

Our project consists of a simple calculator web application composed by the four basic operations (addition, subtraction, multiplication and division). We used VM instances since they provide better isolation properties than containers.

## Launch Management Node

In order to lauch the projetc management node, the vagrant file path need to be defined. As a result, the selected vagrant file will be run when running the command vagrant up. Finally, the management node can be acessed by ssh.

```
export VAGRANT_VAGRANTFILE="Vagrantfile.project"
vagrant up
vagrant ssh
```

To allow the comunication between the management node and the deployed infrastruture, a RSA keypair need to be created.

```
ssh-keygen -t rsa -b 4096
```

## Infrastruture Deployment and Provision

After having the terraform files all set, all the plugins should be installed (terraform init), a plan must be scheduled (terraform plan), in order to be able to apply/allocate the inteded resourses for the infrastructure (terraform apply). 

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

![](./figs/gcp.png "GCP VM instances")

## Endpoints

App frontend:

```
<load-balancer-ip>
```

Prometheus:

```
<load-balancer-ip>:9090
```

![](./figs/prometheus.png "Prometheus page")

Grafana:

```
<load-balancer-ip>:3000
```

![](./figs/grafana.png "Grafana page")

HAProxy Statistics (Load Balancing stats):

```
<load-balancer-ip>:3000/haproxy?stats
```

![](./figs/haproxy.png "HAProxy Stats page")

## Conclude Experiments

After all experiments with the infrastructure, we preceed destroying the allocated resources as follows:

```
terraform destroy
```

In order to exit and destroy the created management node:

```
exit
vagrant destroy
```