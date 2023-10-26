# KMS 服务

自建的 KMS (Key Management Services) 服务，可用于激活众多 Microsoft 产品。

## 主机

```
kms.bsdayo.moe
```

## 使用

以 Windows 激活为例

1. 前往 [Microsoft 文档](https://learn.microsoft.com/windows-server/get-started/kms-client-activation-keys#generic-volume-license-keys-gvlk) 查找通用批量许可证密钥 (GVLK)
2. 例如需要激活 Windows 10/11 企业版，则找到对应的 GVLK：`NPPR9-FWDCX-D2C8J-H872K-2YT43`
3. 在待激活的系统中**以管理员权限**运行命令提示符 (`cmd.exe`)，输入以下命令即可激活系统
    ```batch
    slmgr /skms kms.bsdayo.moe
    slmgr /ipk NPPR9-FWDCX-D2C8J-H872K-2YT43
    slmgr /ato
    ```
