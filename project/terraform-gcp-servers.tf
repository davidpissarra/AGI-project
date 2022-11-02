
# Elemets of the cloud such as virtual servers,
# networks, firewall rules are created as resources
# syntax is: resource RESOURCE_TYPE RESOURCE_NAME
# https://www.terraform.io/docs/configuration/resources.html

########### Redis  ###################

resource "google_redis_instance" "db" {
  name           = "db"
  tier           = "STANDARD_HA"
  memory_size_gb = 2
  region         = var.GCP_REGION
  redis_version  = "REDIS_6_X"
}


###########  Web Servers ZONE B  #############
# This method creates as many identical instances as the "count" index value
resource "google_compute_instance" "webzoneb" {
    count = 4
    name = "web${count.index+1}"
    machine_type = var.GCP_MACHINE_TYPE
    zone = var.GCP_ZONE_B

    boot_disk {
        initialize_params {
          # image list can be found at:
          # https://cloud.google.com/compute/docs/images
          image = "ubuntu-2004-focal-v20221015"
        }
    }

    network_interface {
      network = "default"
      access_config {
      }
    }

    metadata = {
      ssh-keys = "ubuntu:${file("/home/vagrant/.ssh/id_rsa.pub")}"
    }
  tags = ["webzoneb"]
}

###########  Web Servers ZONE C  #############
# This method creates as many identical instances as the "count" index value
resource "google_compute_instance" "webzonec" {
    count = 4
    name = "web${count.index+5}"
    machine_type = var.GCP_MACHINE_TYPE
    zone = var.GCP_ZONE_C

    boot_disk {
        initialize_params {
          # image list can be found at:
          # https://cloud.google.com/compute/docs/images
          image = "ubuntu-2004-focal-v20221015"
        }
    }

    network_interface {
      network = "default"
      access_config {
      }
    }

    metadata = {
      ssh-keys = "ubuntu:${file("/home/vagrant/.ssh/id_rsa.pub")}"
    }
  tags = ["webzonec"]
}

###########  Web Servers ZONE D  #############
# This method creates as many identical instances as the "count" index value
resource "google_compute_instance" "webzoned" {
    count = 2
    name = "web${count.index+9}"
    machine_type = var.GCP_MACHINE_TYPE
    zone = var.GCP_ZONE_D

    boot_disk {
        initialize_params {
          # image list can be found at:
          # https://cloud.google.com/compute/docs/images
          image = "ubuntu-2004-focal-v20221015"
        }
    }

    network_interface {
      network = "default"
      access_config {
      }
    }

    metadata = {
      ssh-keys = "ubuntu:${file("/home/vagrant/.ssh/id_rsa.pub")}"
    }
  tags = ["webzoned"]
}


###########  Load Balancer   #############
resource "google_compute_instance" "balancer" {
    name = "balancer"
    machine_type = var.GCP_MACHINE_TYPE
    zone = var.GCP_ZONE_C

    boot_disk {
        initialize_params {
          # image list can be found at:
          # https://cloud.google.com/compute/docs/images
          image = "ubuntu-2004-focal-v20221015"
        }
    }

    network_interface {
      network = "default"
      access_config {
      }
    }

    metadata = {
      ssh-keys = "ubuntu:${file("/home/vagrant/.ssh/id_rsa.pub")}"
    }

  tags = ["balancer"]
}

#############   prometheus   #############
resource "google_compute_instance" "prometheus" {
    name = "prometheus"
    machine_type = var.GCP_MACHINE_TYPE
    zone = var.GCP_ZONE_C

    boot_disk {
        initialize_params {
          # image list can be found at:
          # https://cloud.google.com/compute/docs/images
          image = "ubuntu-2004-focal-v20221015"
        }
    }

    network_interface {
      network = "default"
      access_config {
      }
    }

    metadata = {
      ssh-keys = "ubuntu:${file("/home/vagrant/.ssh/id_rsa.pub")}"
    }

  tags = ["prometheus"]
}

resource "google_compute_instance" "grafana" {
    name = "grafana"
    machine_type = var.GCP_MACHINE_TYPE
    zone = var.GCP_ZONE_C

    boot_disk {
        initialize_params {
          # image list can be found at:
          # https://cloud.google.com/compute/docs/images
          image = "ubuntu-2004-focal-v20221015"
        }
    }

    network_interface {
      network = "default"
      access_config {
      }
    }

    metadata = {
      ssh-keys = "ubuntu:${file("/home/vagrant/.ssh/id_rsa.pub")}"
    }

  tags = ["grafana"]
}
