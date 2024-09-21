module "full-stack-k8s" {
  source              = "./aks"
}

output "kube_config" {
  value     = module.full-stack-k8s.kube_config
  sensitive = true
}

