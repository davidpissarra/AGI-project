# Terraform GCP
# To output variables, follow pattern:
# value = TYPE.NAME.ATTR

output "balancer" {
    value = join(" ", google_compute_instance.balancer.*.network_interface.0.access_config.0.nat_ip)
}

output "prometheus" {
    value = join(" ", google_compute_instance.prometheus.*.network_interface.0.access_config.0.nat_ip)
}

output "grafana" {
    value = join(" ", google_compute_instance.grafana.*.network_interface.0.access_config.0.nat_ip)
}

# example for a set of identical instances created with "count"
output "web_IPs"  {
  value = formatlist("%s = %s", google_compute_instance.web[*].name, google_compute_instance.web[*].network_interface.0.access_config.0.nat_ip)
}

output "db_IP" {
 description = "The IP address of the instance."
 value = "${google_redis_instance.db.host}"
}
