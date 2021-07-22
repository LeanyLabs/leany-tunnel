# leany-tunnel

leany-tunnel exposes your localhost to the world for easy testing and sharing! No need to mess with DNS or deploy just to have others test out your changes.

## Quickstart

```
npx @leanylabs/leany-tunnel
```

```
TUNNEL_SUBDOMAIN=any-subdomain-i-wish PORT=3000 npx @leanylabs/leany-tunnel
```

## Installation

### Globally

```
npm install -g @leanylabs/leany-tunnel
```

### As a dependency in your project

```
npm install  @leanylabs/leany-tunnel
```

## CLI usage

When leany-tunnel is installed either globally or as a dependency in your project, just use the `llt` command to start the tunnel.

```
llt
```

```
TUNNEL_SUBDOMAIN=any-subdomain-i-wish PORT=3000 llt
```

## Reading enviromantal variables from .env

If you have ".env" file with TUNNEL_SUBDOMAIN and PORT variables on the board in the same directory from where you're starting leany-tunnel, the lib will read the values of that variables directly so you will not have to duplicate them in the cli, but pay attention that cli-passed variables have higher priority than .env-passed ones.
